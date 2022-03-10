const express = require('express')
const app = express()
const PORT = 3000



app.get('/movies', (req, res) => {
    res.send({
        id: 1, title: "Transformers",
    })
})

app.get('/songs', (req, res) => {
    res.send({
        id: 1, title: "Country Roads",
    })
})

app.get('/cars', (req, res) => {
    res.send({
        id: 1, model: "Corvette",
    })
})

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})