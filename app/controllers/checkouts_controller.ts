import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import User from '#models/user';
import Stripe from 'stripe';
import { assert } from '../assert.js';
import { checkoutValidator } from '#validators/checkout';
import Deck from '#models/deck';

export const stripe = new Stripe(env.get('STRIPE_SECRET_KEY'))

export default class CheckoutsController {
    public async checkout({ auth, request, response }: HttpContext) {
        assert(auth.user, 'kindly login');
        const { deckId } = await request.validateUsing(checkoutValidator);

        const deck = await Deck.query().where('id', deckId).first();

        if (!deck) {
            return response.notFound({ message: 'Le deck n\'existe pas' });
        }

        const customerId = await this.getOrCreateStripeCustomerId(auth.user);

        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customerId },
            { apiVersion: '2024-09-30.acacia' }
        );

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(deck.priceId) * 100,
            currency: 'eur',
            customer: customerId,
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                deckId: deck.id,
                userId: auth.user.id,
            }
        });

        return response.ok({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customerId,
            publishableKey: env.get('STRIPE_PUBLIC_KEY'),
        });
    }

    async stripeKey({ response }: HttpContext) {
        return response.ok({ key: env.get('STRIPE_PUBLIC_KEY') });
    }

    public async webhook({ request, response }: HttpContext) {
        console.log('webhook');
        const RequestRaw = request.raw()
        const signature = request.header('stripe-signature')

        console.log('RequestRaw :', RequestRaw);
        console.log('signature :', signature);

        assert(signature, 'Stripe signature is required');
        assert(RequestRaw, 'Request body is required');

        let event;
        try {
            event = stripe.webhooks.constructEvent(
                RequestRaw,
                signature,
                env.get('STRIPE_WEBHOOK_SECRET')
            );
        } catch (err) {
            // console.log(err);
            return response.badRequest({ message: 'Webhook Error', error: err });
        }


        switch (event.type) {
            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                const userId = paymentIntent.metadata.userId;
                const deckId = paymentIntent.metadata.deckId;

                console.log('Paiement réussi :', paymentIntent)
                console.log('User ID :', userId)
                console.log('Deck ID :', deckId)

                // const user = await User.query().where('id', userId).first();
                // const deck = await Deck.query().where('id', deckId).first();

                // if (!user || !deck) {
                //     return response.notFound({ message: 'User or deck not found' });
                // }
                // await user.related('decks').attach([deck.id]);
                // console.log('Paiement réussi :', paymentIntent);
                break;
            }
            case 'payment_intent.payment_failed': {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                console.log('Paiement échoué :', paymentIntent);
                break;
            }
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return response.ok({ received: true });

    }

    public async getOrCreateStripeCustomerId(user: User) {
        if (user.stripeCustomerId) {
            return user.stripeCustomerId;
        }

        const stripeCustomer = await stripe.customers.create({
            email: user.email,
        });
        await User.query().where('id', user.id).update({ stripeCustomerId: stripeCustomer.id });
        return stripeCustomer.id;
    }

}