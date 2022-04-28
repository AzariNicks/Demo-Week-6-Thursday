const express = require('express')
const path = require('path')


const app = express() 

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '17c9883710fa4d0987e35e5de81ad841',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.info('Hello we chillin world!')




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))
