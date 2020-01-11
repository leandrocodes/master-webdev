const http = require('http')
//
const express = require('express')

const app = express()

app.use('/add-product', (req, res, next) => {
  console.log(`In add-product middleware!`)
  res.send(`Sending HTML from add-product middleware!`)
})

app.use('/', (req, res, next) => {
  console.log(`In another middleware!`)
  res.send(`Sending HTML!`)
})

const server = http.createServer(app)
server.listen(3000)
