import { Router } from 'express'
import { userRoutes } from './users.routes'
import { healthController } from '../controllers/health.controller'

const routes = Router()

routes.get('/health', healthController)
routes.use('/users', userRoutes)

export { routes }