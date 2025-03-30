import { prisma } from '../config/database'
import { User } from '@prisma/client'

export const UserRepository = {
  findAll: async (): Promise<User[]> => {
    return prisma.user.findMany()
  },

  findById: async (id: string): Promise<User | null> => {
    return prisma.user.findUnique({ where: { id } })
  },

  create: async (data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    return prisma.user.create({ data })
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    return prisma.user.update({ where: { id }, data })
  },

  delete: async (id: string): Promise<User> => {
    return prisma.user.delete({ where: { id } })
  },
}