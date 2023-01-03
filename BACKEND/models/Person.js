const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    surname: String,
    DNI: Number,
    age: Number,
    salary: Number,

})



module.exports = Person