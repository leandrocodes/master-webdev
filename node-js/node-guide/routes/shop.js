const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(`Sending HTML to Home!`)
})

module.exports = router