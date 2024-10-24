import router from '@adonisjs/core/services/router'

import AutoSwagger from "adonis-autoswagger";
import swagger from "#config/swagger";

import { middleware } from './kernel.js'

const FakesController = () => import('#controllers/fakes_controller')
const AuthController = () => import('#controllers/auth_controller')
const DecksController = () => import('#controllers/decks_controller')
const CardsController = () => import('#controllers/cards_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const ExplorersController = () => import('#controllers/explorers_controller')
const GamesController = () => import('#controllers/games_controller')

router.get('/', async () => {
  return {
    memorize: 'it',
  }
})

router.group(() => {
  router.post('/auth/login', [AuthController, 'login'])
  router.post('/auth/register', [AuthController, 'register'])
})

router.group(() => {
  router.get('/categories', [CategoriesController, 'all'])

  router.group(() => {
    router.post('/', [DecksController, 'create'])
    router.get('/', [DecksController, 'get'])
  }).prefix('/decks')

  router.group(() => {
    router.post('/', [CardsController, 'create'])
    router.get('/:id', [CardsController, 'get'])
  }).prefix('/cards')

  router.group(() => {
    router.get('/all', [ExplorersController, 'allPublicDecks'])

  }).prefix('/explorer')

  router.group(() => {
    router.get('/random/:id', [GamesController, 'getRandomCard'])
    router.post('/swipe', [GamesController, 'swipe'])
  }).prefix('/game')

  router.post('/auth/logout', [AuthController, 'logout'])
}).use(middleware.auth())

router.get('/fakes', [FakesController, 'index'])


router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

router.get("/docs", async () => {
  return AutoSwagger.default.ui("/swagger", swagger);
});

router.get('*', async () => {
  return {
    message: 'Not found',
  }
})

