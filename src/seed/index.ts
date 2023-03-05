import type { Payload } from 'payload'

import { home } from './home'
import { posts } from './posts-page'

export const seed = async (payload: Payload): Promise<void> => {
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      name: 'Payload Dev',
      password: 'test',
      roles: ['admin'],
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [homePage, postsPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      data: home,
    }),
    payload.create({
      collection: 'pages',
      data: posts,
    }),
  ])

  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: postsPage.id,
            },
            label: 'Posts',
          },
        },
      ],
    },
  })
}
