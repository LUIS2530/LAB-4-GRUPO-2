const app = require("./app")

require("./database/mongodb")

const PORT = 3000

app.listen(PORT, console.log(`Conectado en el puerto ${PORT}`))