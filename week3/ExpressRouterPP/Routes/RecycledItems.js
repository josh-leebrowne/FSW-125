const express = require('express')
const itemRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let items = [
    {
        name: 'Water Bottle', 
        descr: 'Bottle, Water Type',
        recyclable: true,
        quantity: 3,
        unitPrice: 2,
        _id: uuidv4()
    },
    {
        name: 'Paper', 
        descr: 'Paper to be printed on',
        recyclable: true,
        quantity: 10,
        unitPrice: .99,
        _id: uuidv4()
    },
    {
        name: 'Sock', 
        descr: 'Fabric footwear',
        recyclable: false,
        quantity: 15,
        unitPrice: 4,
        _id: uuidv4()
    },
    {
        name: 'Pizza Box', 
        descr: 'Box of pizza',
        recyclable: false,
        quantity: 7,
        unitPrice: 4,
        _id: uuidv4()
    }
]

itemRouter
    .get('/', (req,res) => {
        res.send(items)
    })

    .post('/', (req, res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        items.push(newItem)

        console.log(items)
        res.send(`${newItem.name} has been added.`)
    })

module.exports = itemRouter