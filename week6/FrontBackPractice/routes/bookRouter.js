const express = require('express')
const bookRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let books =[
    {title: 'Book 1', author: 'Author 1', genre: "genre one", _id: uuidv4()},
    {title: 'Book 2', author: 'Author 2', genre: "genre two", _id: uuidv4()},
    {title: 'Book 3', author: 'Author 3', genre: "genre three", _id: uuidv4()},
    {title: 'Book 4', author: 'Author 4', genre: "genre four", _id: uuidv4()}
]


//a route parameter is never null or undefined
//a route paramter is always a string with positive length

//Routes
bookRouter
    //get all
    .get('/', (req, res, next) => {
        //res.send(books)
        next()
    })

    .get('/', (req, res, next) => {
        next()
    })

    .get('/', (req, res) => {
        res.status(200).send(books)
    })

    //get one
    //: is wildcard
    .get('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const singularBook = books.find(book => book._id === bookId)

        if(!singularBook){
            const error = new Error ('This item was not found.')
            return next(error)
        }
        res.status(200).send(singularBook)
    })

    .get('/search/genre', (req, res) => {
        const bookGenre = req.query.genre
        const filteredBooks = books.filter(book => book.genre === bookGenre);
        
        res.status(200).send(filteredBooks)
    })

    .post('/', (req, res) =>{
        const newBook = req.body
        newBook._id = uuidv4()
        books.push(newBook)

        console.log(books)
        res.status(201).send(newBook)
    })

    .delete('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        books.splice(bookIndex, 1)

        res.status(201).send('Resource Successfully Deleted')
    } )

    .put('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        Object.assign(books[bookIndex], req.body) //ObjectAssign upserts the construct: only updates fields that are different between the two

        res.status(200).send(`Resource Updated`)
    })

module.exports = bookRouter