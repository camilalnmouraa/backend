import { Request, Response } from 'express'
import { UserService } from '../services/user.service'

export const UserController = {
  index: async (_: Request, res: Response) => {
    const users = await UserService.getAll()
    res.json(users)
  },

  show: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
  
    try {
      const user = await UserService.getById(id)
      if (!user) {
        res.status(404).json({ message: 'User not found' })
        return
      }
      res.json(user)
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Erro interno' })
    }
  },  

  create: async (req: Request, res: Response) => {
    const {
      name,
      email,
      phone,
      birthdate,
      address,
      city,
      state,
      zipCode
    } = req.body

    const user = await UserService.create({
      name,
      email,
      phone,
      birthdate,
      address,
      city,
      state,
      zipCode
    })

    res.status(201).json(user)
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const data = req.body
    const user = await UserService.update(id, data)
    res.json(user)
  },

  delete: async (req: Request, res: Response) => {
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