import express from 'express'
import payload from 'payload'

import { seed } from './seed'

// eslint-disable-next-line
require('dotenv').config()

const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    payload.logger.info('Seeding Payload...')
    await seed(payload)
    payload.logger.info('Done.')
  }

  app.listen(3000)
}

start()
