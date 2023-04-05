import payload from 'payload'
import type { CollectionConfig, FieldHook } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import adminsAndUser from './access/adminsAndUser'
import { checkRole } from './checkRole'

const checkFirstUser: FieldHook = async ({ siblingData }) => {
  const users = await payload.find({ collection: 'users' })
  if (users.totalDocs > 0) return null
  if (users.totalDocs === 0) {
    siblingData.roles = ['admin']
  }
}

export const UserFields: CollectionConfig['fields'] = [
  {
    name: 'name',
    type: 'text',
  },
  {
    name: 'roles',
    type: 'select',
    hasMany: true,
    saveToJWT: true,
    hooks: {
      beforeChange: [checkFirstUser],
    },
    defaultValue: ['user'],
    options: [
      {
        label: 'admin',
        value: 'admin',
      },
      {
        label: 'user',
        value: 'user',
      },
    ],
    access: {
      read: admins,
      create: admins,
      update: admins,
    },
  },
]

const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  auth: true,
  fields: UserFields,
  timestamps: true,
}

export default Users
