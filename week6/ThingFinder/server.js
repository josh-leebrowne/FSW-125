const express = require('express')
const morgan = require('morgan')

const thingRouter = require('./routes/thingRouter')

const app = express()
const PORT = 3000

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/things', thingRouter)

//Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})