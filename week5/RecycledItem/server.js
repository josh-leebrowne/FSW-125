const express = require('express')
const morgan = require('morgan')


const recycledItems = require('./Routes/itemRouter')

const app = express()
const PORT = 9000


//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/itemsIntake', recycledItems)


//Server Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})