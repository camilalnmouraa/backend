import { UserRepository } from '../repositories/user.repository'
import { Prisma } from '@prisma/client'

type CreateUserDTO = {
  name: string
  email: string
  phone?: string
  birthdate?: Date
  address?: string
  city?: string
  state?: string
  zipCode?: string
}

type UpdateUserDTO = Partial<CreateUserDTO>

export const UserService = {
  getAll: () => UserRepository.findAll(),

  getById: (id: string) => UserRepository.findById(id),

  create: (data: CreateUserDTO) => UserRepository.create(data),

  update: (id: string, data: UpdateUserDTO) =>
    UserRepository.update(id, data),

  remove: (id: string) => UserRepository.delete(id),

  restore: (id: string) => UserRepository.restore(id)
}