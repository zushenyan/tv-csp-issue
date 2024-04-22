const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.set('Content-Security-Policy', "script-src 'self' 'unsafe-inline' 'nonce-abc'; frame-src 'self' blob:")
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(express.static('public'))

app.listen(3000)