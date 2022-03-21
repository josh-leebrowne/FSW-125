var express = require('express')
var app = express()
app.use(express.json())
const port = 3000

var list = [
    {id: 1, item: "TicTacs", price: .99},
    {id: 2, item: "Reeses", price: 1.50}
]

//  CRUD 

// R - Read
// (GET) ENDPOINT: http://localhost:3000/list
app.get("/list", function(req, res){
    console.log('Retrieving Items...')
    res.status(200).json(list).end()
})

// C- Create/Add
// (POST) ENDPOINT: http://localhost:3000/list
app.post("/list", function(req, res){
    console.log("Adding Items...")
    list.push(req.body)
    console.log("List Size = " + list.length)
    res.status(200).end()
})

// D - Delete/Remove
// (DELETE) ENDPOINT: http://localhost:3000/list:id
app.delete("/list/:id", function(req, res){
    console.log("Item Deleted")
    count = 0
    for(const item of list){
        if(item.id == req.params.id){
            list.splice(count, 1)
            break
        }
        count++
    }
    console.log("List Size = " + list.length)
    res.status(200).end()
})



app.listen(port, () =>
    console.log(`listening on Port ${port}`)
)