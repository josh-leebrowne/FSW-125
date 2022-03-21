//server.js
const express = require('express')
const app = express()

const bookRouter = require('./routes/bookRouter')
const showsRouter = require('./routes/showsRouter')

const PORT = 3000;

//Application Level Middleware
app.use(express.json())  //for parsing application

//Routes
app.use('/books', bookRouter)
app.use('/tvShows', showsRouter)


//Server Startup Logic
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})


