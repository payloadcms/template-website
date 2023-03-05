import type { Post } from '../payload-types'

export const post1: Partial<Post> = {
  title: 'Post 1',
  slug: 'post-1',
  _status: 'published',
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'Post 1',
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
    title: 'Post 1',
    description: 'Post 1',
    image: '',
  },
}
