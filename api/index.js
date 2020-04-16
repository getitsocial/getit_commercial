/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */

import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cloudinary from 'cloudinary'
import multipart from 'connect-multiparty'
import {} from 'dotenv/config'

const multipartMiddleware = multipart()

cloudinary.config({
  cloud_name: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VUE_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.VUE_APP_CLOUDINARY_API_SECRET,
})

const app = express()
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(bodyParser.json({ limit: '10mb', extended: false }))
app.use(helmet())

app.get('/', (req, res) => {
  res.json({ it: 'works!' })
})

app.post(
  '/image/upload/:folder',
  multipartMiddleware,
  async ({ files: { file }, params: { folder, user } }, res, next) => {
    if (!file) {
      return next()
    }
    try {
      const {
        public_id,
        etag,
        format,
        secure_url,
      } = await cloudinary.v2.uploader.upload(file.path, {
        tags: ['bucket', 'temporary'],
        folder,
        use_filename: false,
        // crop: 'imagga_scale',
        secure: true,
        width: 1000,
        height: 1000,
      })
      res.status(201).json({ public_id, etag, format, secure_url })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
)

app.delete('/image/delete', async ({ body: { imageId } }, res, next) => {
  try {
    await cloudinary.v2.uploader.destroy(imageId)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

export default {
  path: '/clientapi',
  handler: app,
}
