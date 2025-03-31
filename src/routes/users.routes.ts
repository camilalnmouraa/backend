import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

const userRoutes = Router()

userRoutes.get('/', UserController.index)
userRoutes.get('/:id', UserController.show)
userRoutes.post('/', UserController.create)
userRoutes.put('/:id', UserController.update)
userRoutes.delete('/:id', UserController.delete)
userRoutes.patch('/:id/restore', UserController.restore)

export { userRoutes }