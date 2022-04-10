const express = require('express')
const movieRouter = express.Router()
const  { v4: uuidv4 } = require('uuid')

let movies = [
    {
        name: 'Star Wars',
        episode: 'The Phantom Menace',
        year: 1999,
        lucasFilm: true,
        mainCharacters: [
            {name: 'Anakin Skywalker'},
            {name: 'Obi-Wan Kenobi'},
            {name: 'Qui-Gon Jinn'},
            {name: 'Darth Maul'},
            {name: 'Padme Amidala'},
            {name: 'Jar Jar Binks'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'Attack of the Clones',
        year: 2002,
        lucasFilm: true,
        mainCharacters: [
            {name: 'Anakin Skywalker'},
            {name: 'Obi-Wan Kenobi'},
            {name: 'Jango Fett'},
            {name: 'Count Dooku'},
            {name: 'Padme Amadala'},
            {name: 'Yoda'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'Revenge of the Sith',
        year: 2005,
        lucasFilm: true,
        mainCharacters: [
            {name: 'Anakin Skywalker'},
            {name: 'Obi-Wan Kenobi'},
            {name: 'Sheev Palpatine'},
            {name: 'Count Dooku'},
            {name: 'General Grievous'},
            {name: 'Bail Organa'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'A New Hope',
        year: 1977,
        lucasFilm: true,
        mainCharacters: [
            {name: 'Luke Skywalker'},
            {name: 'Princess Leia'},
            {name: 'Han Solo'},
            {name: 'Obi-Wan Kenobi'},
            {name: 'Darth Vader'},
            {name: 'R2-D2'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'The Empire Strikes Back',
        year: 1980,
        lucasFilm: true,
        mainCharacters: [
            {name: 'Luke Skywalker'},
            {name: 'Princess Leia'},
            {name: 'Han Solo}'},
            {name: 'Obi-Wan Kenobi'},
            {name: 'Darth Vader'},
            {name: 'R2-D2'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'Return of the Jedi',
        year: 1983,
        lucasFilm: true,
        mainCharacters: [
            {name: 'Luke Skywalker'},
            {name: 'Princess Leia'},
            {name: 'Han Solo'},
            {name: 'Obi-Wan Kenobi'},
            {name: 'Darth Vader'},
            {name: 'R2-D2'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'The Force Awakens',
        year: 2015,
        lucasFilm: false,
        mainCharacters: [
            {name: 'Rey'},
            {name: 'Finn'},
            {name: 'Kylo Ren'},
            {name: 'Han Solo'},
            {name: 'Poe Dameron'},
            {name: 'General Hux'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Rogue One',
        episode: 'A Star Wars Story',
        year: 2016,
        lucasFilm: false,
        mainCharacters: [
            {name: 'Jyn Erso'},
            {name: 'Cassian Andor'},
            {name: 'Orson Krennic'},
            {name: 'Saw Gerrera'},
            {name: 'Galen Erso'},
            {name: 'K-2SO'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'The Last Jedi',
        year: 2017,
        lucasFilm: false,
        mainCharacters: [
            {name: 'Luke Skywalker'},
            {name: 'Rey'},
            {name: 'Finn'},
            {name: 'Kylo Ren'},
            {name: 'Princess Leia'},
            {name: 'Supreme Leader Snoke'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Solo',
        episode: 'A Star Wars Story',
        year: 2018,
        lucasFilm: false,
        mainCharacters: [
            {name: 'Han Solo'},
            {name: 'Qira'},
            {name: 'Tobia Beckett'},
            {name: 'Dryden Voss'},
            {name: 'Lando Calrissian'},
            {name: 'Chewbacca'}
        ],
        _id: uuidv4()
    },
    {
        name: 'Star Wars',
        episode: 'The Last Jedi',
        year: 2019,
        lucasFilm: false,
        mainCharacters: [
            {name: 'Rey'},
            {name: 'Finn'},
            {name: 'Poe Dameron'},
            {name: 'Kylo Renn'},
            {name: 'Luke Skywalker'},
            {name: 'Princess Leia'}
        ],
        _id: uuidv4()
    },
]

movieRouter
    //Get All
    .get('/', (req, res) => {
        res.status(200).send(movies)
    })

    //Get One
    .get('/:itemId', (req, res) => {
        const movieId = req.params.itemId
        const singularMovie = movies.find(movie => movie._id === movieId)

        if(!singularMovie){
            const error = new Error('This item was not found.')
            return next(error)
        }
        res.status(200).send(singularMovie)
    })

    //Query
    .get('/search/name', (req, res) => {
        const movieName = req.query.name
        const filteredMovie = movies.filter(movie => movie.name === movieName)

        if(!filteredMovie){
            const error = new Error('This item was not found.')
            return next(error)
        }
        res.status(200).send(filteredMovie)
    })

    .post('/', (req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)

        res.status(201).send(newMovie)
    })

    .put('/:movieId', (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        Object.assign(movies[movieIndex], req.body)

        res.status(200).send('Resource Updated.')
    })

    .delete('/:movieId', (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)

        res.status(201).send('Resource Successfully Deleted')
    })
module.exports = movieRouter 