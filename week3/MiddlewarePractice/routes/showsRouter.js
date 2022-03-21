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
showsRouter
    .get('/', (req, res) => {
        res.send(tvShows)
    })

    .get('/:showID', (req, res) => {
        const showID = req.params.showID
        const singularShow = tvShows.find(show => show._id === showID)

        res.send(singularShow)
    })

    .get('/search/channel', (req, res) => {
        const showChannel = req.query.channel
        const filteredShow = tvShows.filter(show => show.channel === showChannel)

        res.send(filteredShow)
    })

    .post('/', (req, res) => {
        const tvShow = req.body
        tvShow._id = uuidv4()
        tvShows.push(tvShow)

        console.log(tvShows)
        res.send(`Successfully added ${tvShow.title} to the database`)
    })

module.exports = showsRouter