import type { Page } from '../payload-types'

export const posts: Partial<Page> = {
  title: 'Posts',
  slug: 'posts',
  _status: 'published',
  hero: {
    type: 'highImpact',
    richText: [
      {
        children: [
          {
            text: 'All Posts',
          },
        ],
        type: 'h1',
      },
    ],
    links: [
      {
        link: {
          type: 'reference',
          appearance: 'primary',
          reference: {
            relationTo: 'pages',
            value: '{{SHOP_PAGE_ID}}',
          },
          label: 'Shop now',
          url: '',
        },
      },
      {
        link: {
          type: 'custom',
          appearance: 'secondary',
          reference: null,
          label: 'View on GitHub',
          url: 'https://github.com/payloadcms/template-website',
          newTab: true,
        },
      },
    ],
    media: '{{SHIRTS_IMAGE}}',
  },
  layout: [],
  meta: {
    title: 'Website ABC',
    description: 'Next.js Website with Payload CMS',
    image: '{{SHIRTS_IMAGE}}',
  },
}
