//server.js
const express = require('express')
const morgan = require('morgan')


const bookRouter = require('./routes/bookRouter')
const showsRouter = require('./routes/showsRouter')

const app = express()
const PORT = 9000;

//Application Level Middleware
app.use(express.json())  //for parsing application
app.use(morgan('dev'))

//Routes
app.use('/books', bookRouter)
app.use('/tvShows', showsRouter)


//Server Startup Logic
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})


