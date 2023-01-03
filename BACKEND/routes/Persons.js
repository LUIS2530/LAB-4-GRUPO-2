const {Router} = require("express");
const {getPersons, 
    getPerson, 
    newPerson,
    updatePerson,
    deletePerson} = require("../controllers/Persons")

const router = Router();

//CREATE
router.post('/person', newPerson)
//READ
router.get('/person', getPersons)
//READ
router.get('/person/:id', getPerson)
//UPDATE
router.patch('/person/:id', updatePerson)
//DELETE
router.delete('/person/:id', deletePerson)


module.exports = router