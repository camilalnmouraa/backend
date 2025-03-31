import { prisma } from '../config/database'
import { User } from '@prisma/client'

export const UserRepository = {
  findAll: async (): Promise<User[]> => {
    return prisma.user.findMany({ where: { deletedAt: null } })
  },

  findById: async (id: string): Promise<User | null> => {
    return prisma.user.findFirst({ where: { id, deletedAt: null } })
  },

  create: async (data: any): Promise<User> => {
    return prisma.user.create({ data })
  },

  update: async (id: string, data: any): Promise<User> => {
    return prisma.user.update({ where: { id }, data })
  },

  delete: async (id: string): Promise<User> => {
    return prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() }
    })
  },

  restore: async (id: string): Promise<User> => {
    return prisma.user.update({
      where: { id },
      data: { deletedAt: null }
    })
  }
}