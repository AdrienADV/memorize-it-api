import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import User from '#models/user';
import Stripe from 'stripe';
import { assert } from '../assert.js';

export const stripe = new Stripe(env.get('STRIPE_SECRET_KEY'))

export default class CheckoutsController {

    public async checkout({ auth, request, response }: HttpContext) {
        assert(auth.user, 'kindly login');
        const body = request.body();
        const stripeCustomerId = await this.getOrCreateStripeCustomerId(auth.user);
        const session = await stripe.checkout.sessions.create({
        });

        if (!session.url) {
            return response.badRequest({ message: 'Session URL not found' });
        }

        return response.ok({ url: session.url });
    }

    public async webhook({ request, response }: HttpContext) {
        const RequestRaw = request.raw();
        const signature = request.header('stripe-signature')
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
            console.log(err);
            return response.badRequest({ message: 'Webhook Error', error: err });
        }

        switch (event.type) {
            case 'checkout.session.completed':
                const metadata = event.data.object.metadata;
                try {
                    console.log('checkout.session.completed', metadata);
                } catch (error) {
                }
                break;
            case 'checkout.session.async_payment_succeeded':
                break;
            default:
                return
        }
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