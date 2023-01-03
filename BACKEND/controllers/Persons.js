const Person = require('../models/Person')

//READ
const getPersons = async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ error:error })
    }
}

//READ
const getPerson = async (req, res) => {
    const id = req.params.id
    try {
        const person = await Person.findOne({_id: id})
        if (!person) {
            res.status(422).json({message: "Usuario no encontrado"})
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({ error: error})
    }
    
}

//CREATE
const newPerson = async (req, res) => {
    const {name,surname,DNI,age,salary} = req.body
    if (!name){
        res.status(422).json({error: 'Name is mandatory'})
        return
    }
    const person = {
        name,
        surname,
        DNI,
        age,
        salary
    }
    try {
        await Person.create(person)
        res.status(201).json({message: 'Person is defined'})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

//UPDATE
const updatePerson = async (req, res) => {
    const id = req.params.id
    const { name,surname,DNI,age, salary} = req.body
    const person = {
        name,
        surname,
        DNI,
        age,
        salary
    }
    
    try {
        const updatePerson = await Person.updateOne({_id: id}, person)
        //console.log(updatePerson)
        if (updatePerson.matchedCount === 0) {
            res.status(422).json({message: 'Usuario no encontrado'})
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
    
}

//DELETE
const deletePerson = async (req, res) => {
    const id = req.params.id
    const person = await Person.findOne({ _id: id })
    if (!person) { //Validación antes de remover
        res.status(422).json({message: 'Usuario no encontrado'})
        return
    }
    try {
        await Person.deleteOne({_id: id})
        res.status(200).json({message: 'Usuario removido'})
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


module.exports = {getPersons, 
    getPerson, 
    newPerson, 
    updatePerson, 
    deletePerson}