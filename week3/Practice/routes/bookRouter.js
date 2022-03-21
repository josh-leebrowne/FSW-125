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

//Router
bookRouter
    .get('/', (req, res, next) => {
        //res.send(books)
        next()
    })

    .get('/', (req, res, next) => {
        next()
    })

    .get('/', (req, res) => {
        res.send(books)
    })




    //: is wildcard
    .get('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const singularBook = books.find(book => book._id === bookId)

        res.send(singularBook)
    })

    .get('/search/genre', (req, res) => {
        const bookGenre = req.query.genre
        const filteredBooks = books.filter(book => book.genre === bookGenre);
        
        res.send(filteredBooks)
    })

    .post('/', (req, res) =>{
        const newBook = req.body
        newBook._id = uuidv4()
        books.push(newBook)

        console.log(books)
        res.send(`Successfully added ${newBook.title} to the database`)
    })

    .delete('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        books.splice(bookIndex, 1)

        res.send('Resource Successfully Deleted')
    } )

    .put('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        Object.assign(books[bookIndex], req.body) //ObjectAssign upserts the construct: only updates fields that are different between the two

        res.send(`Resource Updated`)
    })

module.exports = bookRouter