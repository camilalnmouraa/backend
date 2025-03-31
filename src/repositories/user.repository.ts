import { prisma } from '../config/database'
import { User } from '@prisma/client'

export const UserRepository = {
  findAll: async () => {
    return prisma.user.findMany({
      where: { deletedAt: null }
    })
  },
  
  findById: async (id: string) => {
    return prisma.user.findFirst({
      where: { id, deletedAt: null }
    })
  },  

  create: async (data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    return prisma.user.create({ data })
  },  

  update: async (id: string, data: Partial<User>): Promise<User> => {
    return prisma.user.update({ where: { id }, data })
  },

  delete: async (id: string) => {
    return prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() }
    })
  },

  restore: async (id: string) => {
    return prisma.user.update({
      where: { id },
      data: { deletedAt: null }
    })
  }  
}