const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 9000

const movieRouter = require('./routes/movieRouter')

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/movies', movieRouter)


//Error Handling
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

//Startup
app.listen(PORT, () => {
    console.log(`App running on: ${PORT}`)
})