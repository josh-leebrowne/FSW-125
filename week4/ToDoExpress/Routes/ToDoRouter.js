const express = require('express')
const toDoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')



let toDos = [
    {
        ToDo: "Clean Car",
        descr: "Vaccum and Wash",
        day: "Monday",
        _id: uuidv4()
    },
    {
        ToDo: "Do Homework",
        descr: "Finish FSW-125 Homework",
        day: "Tuesday",
        _id: uuidv4()
    },
    {
        ToDo: "Call Vet",
        descr: "Call Vet for Piper's checkup",
        day: "Wednesday",
        _id: uuidv4()
    }
]

toDoRouter
    .get('/', (req, res, next) =>{
        res.send(toDos)
        next()
    })
    .get('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId
        const singularToDO = toDos.find(toDo => toDo._id === toDoId )

        res.send(singularToDO)
    })

    .post('/', (req, res) => {
        const newToDo = req.body
        newToDo._id = uuidv4()
        toDos.push(newToDo)

        res.send(`Resource has successfully been added.`)
    })

    .put('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId
        const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId )
        Object.assign(toDos[toDoIndex], req.body)

        res.send('Resource Updated')
    })

    .delete('/:toDoId', (req, res) => {
        const toDoId = req.params.toDoId
        const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId )
        toDos.splice(toDoIndex, 1)

        res.send('Resource Successfully Deleted')
    })

module.exports = toDoRouter