const express = require('express')
const cors = require('cors')

const personsRoutes = require("./routes/Persons")
const app = express()

/*
app.use(
    express.urlencoded ({
        extende: true
    }))
*/

app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))


app.get('/', (req,res) => { // "/" es ENDPOINT
    res.json({message: 'Welcome to the server!'})
})
app.use(personsRoutes)


module.exports = app;

