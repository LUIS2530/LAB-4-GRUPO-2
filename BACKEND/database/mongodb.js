const mongoose = require('mongoose')

const DB_USER = 'test'
const DB_PASSWORD = 'test'

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@labcluster.0s2vqmw.mongodb.net/DATA_PROYECT?retryWrites=true&w=majority`
    // `mongodb+srv://${DB_USER}:${DB_PASSWORD}@miapi.x3yqci9.mongodb.net/?retryWrites=true&w=majority`
    ).then(() => {
        console.log('Conectado al MONGODB')
    })
    .catch((err) => {
        console.log(err)
    })
//mongodb+srv://Usuariotest:<password>@miapi.x3yqci9.mongodb.net/?retryWrites=true&w=majority