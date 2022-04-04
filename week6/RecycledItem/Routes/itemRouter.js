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
    //Get All
    .get('/',(req, res) => {
        res.send(items)
    })

    //Get Item
    .get('/:itemId', (req, res) => {
        const itemId = req.params.itemId
        const singularItem = items.find(item => item._id === itemId)

        res.send(singularItem)
    })
    
    .get('/search/name', (req, res) => {
        const itemName = req.query.name
        const filteredItems = items.filter(item => item.name === itemName)
        res.send(filteredItems)
    })

    .post('/', (req, res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        items.push(newItem)

        console.log(items)
        res.send(newItem)
    })

    .put('/:itemId', (req, res) => {
        const itemId = req.params.itemId
        const itemIndex = items.findIndex(item => item._id === itemId)
        Object.assign(items[itemIndex], req.body)

        res.send(items[itemIndex])
    })

    .delete('/:itemId', (req, res) => {
        const itemId = req.params.itemId
        const itemIndex = items.findIndex(item => item._id === itemId)
        items.splice(itemIndex, 1)

        res.send('Resource Successfully Deleted')
    })

    

module.exports = itemRouter