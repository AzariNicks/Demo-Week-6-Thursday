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
rollbar.log(`Hey Man We Are Here`)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
let Me = 1
if(Me != 0){
  rollbar.info(`guess whos not 0`)

}







try {
  nonExistentFunction();
} catch (error) {
  rollbar.log(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}







const port = process.env.PORT || 4545 
const lol = 90

app.listen(port, () => console.log(`Take us to warp ${port}!`))
