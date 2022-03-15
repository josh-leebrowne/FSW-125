const express = require('express')
const bookRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let books =[
    {title: 'Book 1', author: 'Author 1', _id: uuidv4()},
    {title: 'Book 2', author: 'Author 2', _id: uuidv4()},
    {title: 'Book 3', author: 'Author 3', _id: uuidv4()},
    {title: 'Book 4', author: 'Author 4', _id: uuidv4()}
]


//Router
bookRouter
    .get('/', (req, res) => {
        res.send(books)
    })

    .post('/', (req, res) =>{
        const newBook = req.body
        newBook._id = uuidv4()
        books.push(newBook)

        console.log(books)
        res.send(`Successfully added ${newBook.title} to the database`)
    })

module.exports = bookRouter