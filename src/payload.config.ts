import nestedDocs from '@payloadcms/plugin-nested-docs'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import path from 'path'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import Users from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'

const generateTitle: GenerateTitle = () => {
  return 'My Store'
}

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

export default buildConfig({
  serverURL: 'http://localhost:8000',
  admin: {
    user: Users.slug,
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          express: mockModulePath,
        },
      },
    }),
  },
  collections: [Users, Categories, Pages, Posts, Media],
  globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.PAYLOAD_PUBLIC_APP_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_APP_URL || ''].filter(Boolean),
  plugins: [
    nestedDocs({
      collections: ['pages', 'posts', 'categories'],
    }),
    seo({
      collections: ['pages', 'posts'],
      generateTitle,
      uploadsCollection: 'media',
    }),
  ],
})
