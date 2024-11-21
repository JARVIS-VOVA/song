import express from 'express'
import cors from 'cors'

import productRoute from './routes/productRoute.js'
import ENV from './env.js'

const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use('/api/products', productRoute)

app.listen(ENV.port, () =>
  console.log(`Server is live @ ${ENV.hostUrl}`),
)
