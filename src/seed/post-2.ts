import type { Post } from '../payload-types'

export const post2: Partial<Post> = {
  title: 'Post 2',
  slug: 'post-2',
  _status: 'published',
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'Post 2',
          },
        ],
        type: 'h1',
      },
    ],
    links: [],
    media: '',
  },
  layout: [],
  meta: {
    title: 'Post 2',
    description: 'Post 2',
    image: '',
  },
}
