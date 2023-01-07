require('dotenv').config()
const port = process.env.PORT || 3000
const express = require('express')
const app = express()
// For Connecting to DB after step 3 is done
// const mongoose = require('mongoose')
// const DB_URL = process.env.DB_URL
const bodyParser = require('body-parser')
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const { setHeaders } = require('./middlewares/setHeaders')
const ghAPIRoutes = require('./routes/githubAPIRoutes')
// FOR CORS
const cors = require('cors')
// set corsConfig if required
const corsConfig = {}

// MIDDLWARES
app.use(cors(corsConfig))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

//testing api
app.get('/helloWorld', (req, res) => {
  res.send('Hello World')
})
app.use('/github_api', ghAPIRoutes)

console.log('starting server')
// mongoose
//   .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
//   });