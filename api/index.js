import express from 'express'
import orders from './orders.json'
import categories from './categories.json'
import articles from './articles.json'

const app = express()

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Mock delaytime between 1 Seconds and 200 Milliseconds
const delayTime = Math.floor(Math.random() * 1000) + 200

app.get('/', (req, res) => {
  res.json({ it: 'works!' })
})

app.get('/orders', async (req, res) => {
  await delay(delayTime)
  res.json(orders)
})

app.get('/categories', async (req, res) => {
  await delay(delayTime)
  res.json(categories)
})

app.get('/articles', async (req, res) => {
  await delay(delayTime)
  res.json(articles)
})

export default {
  path: '/api',
  handler: app
}
