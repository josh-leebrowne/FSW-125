<<<<<<< HEAD
const express = require('express')
const app = express()

const recycledItems = require('./routes/RecycledItems')

const PORT = 3000


//Middleware
app.use(express.json())

//Routes
app.use('/itemsIntake', recycledItems)


//Server Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
=======
const express = require('express')
const app = express()

const recycledItems = require('./routes/RecycledItems')

const PORT = 3000


//Middleware
app.use(express.json())

//Routes
app.use('/itemsIntake', recycledItems)


//Server Startup
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
>>>>>>> 35534059ef995bf4deeed91e8981ea3948827b5f
})