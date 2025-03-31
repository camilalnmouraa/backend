import { Request, Response, RequestHandler } from 'express'
import { UserService } from '../services/user.service'

export const UserController: {
  index: RequestHandler
  show: RequestHandler
  create: RequestHandler
  update: RequestHandler
  delete: RequestHandler
  restore: RequestHandler
} = {
  index: async (_req, res) => {
    const users = await UserService.getAll()
    res.json(users)
  },

  show: async (req, res) => {
    const { id } = req.params
    const user = await UserService.getById(id)

    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    res.json(user)
  },

  create: async (req, res) => {
    const { name, email } = req.body;
    const user = await UserService.create(name, email);
    res.status(201).json(user);
  },

  update: async (req, res) => {
    const { id } = req.params
    const data = req.body
    const user = await UserService.update(id, data)
    res.json(user)
  },

  delete: async (req, res) => {
    const { id } = req.params
    await UserService.remove(id)
    res.status(204).send()
  },

  restore: async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await UserService.restore(id)
    res.status(200).json(user)
  }  
}