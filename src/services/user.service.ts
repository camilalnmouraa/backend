import { UserRepository } from '../repositories/user.repository'

export const UserService = {
  getAll: () => UserRepository.findAll(),

  getById: (id: string) => UserRepository.findById(id),

  create: (name: string, email: string) =>
    UserRepository.create({
      name, email,
      deletedAt: null
    }),

  update: (id: string, data: { name?: string; email?: string }) =>
    UserRepository.update(id, data),

  remove: (id: string) => UserRepository.delete(id),

  restore: (id: string) => UserRepository.restore(id),
}