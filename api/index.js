import express from 'express'
import orders from './orders.json'
import categories from './categories.json'
import articles from './articles.json'

const app = express()

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

app.get('/', (req, res) => {
  res.json({ it: 'works!' })
})

app.get('/orders', async (req, res) => {
  await delay(1000)
  res.json(orders)
})

app.get('/categories', async (req, res) => {
  await delay(1000)
  res.json(categories)
})

app.get('/articles', async (req, res) => {
  await delay(1000)
  res.json(articles)
})

export default {
  path: '/api',
  handler: app
}
