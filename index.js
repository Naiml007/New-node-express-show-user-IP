const express = require('express')
const app = express()

app.use(express.static('public'))

function logIP(req, res, next) {
  console.log(`User IP: ${req.ip}`)
  next()
}

app.use(logIP)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('Server listening on port 3000')
})
