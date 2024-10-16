import router from '@adonisjs/core/services/router'
import FakesController from '#controllers/fakes_controller'
import AuthController from '#controllers/auth_controller'
import { middleware } from './kernel.js'
import DecksController from '#controllers/decks_controller'
import CardsController from '#controllers/cards_controller'
import CategoriesController from '#controllers/categories_controller'
import ExplorersController from '#controllers/explorers_controller'

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

  router.post('/auth/logout', [AuthController, 'logout'])
}).use(middleware.auth())

router.get('/fakes', [FakesController, 'index'])

router.get('*', async () => {
  return {
    message: 'Not found',
  }
})

