//Server
const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 3000

const toDoRouter = require('./Routes/ToDoRouter')

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/toDos', toDoRouter)


//ServerStart
app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})