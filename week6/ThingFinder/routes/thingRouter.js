const express = require('express')
const res = require('express/lib/response')
const thingRouter = express.Router()

let things = [
    {
        name: "banana",
        type: "fruit",
    },
    {
        name: "shoes",
        type: "clothing"
    },
    {
        name: "orange",
        type: "fruit"
    },
    {
        name: "lego Set",
        type: "toy"
    },
    {
        name: "hat",
        type: "clothing"
    },
    {
        name: "hot Wheels",
        type: "toy"
    }
]

//Routes

thingRouter
    //get all
    .get('/', (req, res) => {
        res.status(200).send(things)
    })

    //get one
    .get('/search/type', (req, res) => {
        const thingType = req.query.type
        const filteredThings = things.filter(thing => thing.type === thingType)

        res.status(200).send(filteredThings)
    })


module.exports = thingRouter