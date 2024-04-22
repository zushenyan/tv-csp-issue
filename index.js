const express = require('express')
const app = express()

app.use(express.static('public', {
  setHeaders: (res) => {
    res.set('Content-Security-Policy', "script-src 'self' 'unsafe-inline' 'nonce-abc'")
  }
}))

app.listen(3000)