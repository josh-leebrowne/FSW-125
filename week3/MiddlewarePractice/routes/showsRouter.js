const express = require('express')
const showsRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


let tvShows = [
    {title: 'Show 1', channel: 'Channel 1', _id: uuidv4()},
    {title: 'Show 2', channel: 'Channel 2', _id: uuidv4()},
    {title: 'Show 3', channel: 'Channel 3', _id: uuidv4()},
    {title: 'Show 4', channel: 'Channel 4', _id: uuidv4()}
]

//Router
showsRouter.get('/', (res, req) => {
    res.send(tvShows)
})

showsRouter.post('/', (res, req) => {
    const tvShow = req.body
    tvShow._id = uuidv4()
    tvShows.push(tvShow)

    console.log(tvShows)
    res.send(`Successfully added ${tvShow.title} to the database`)
})

module.exports = showsRouter