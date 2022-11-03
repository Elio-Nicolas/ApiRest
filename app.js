
require("dotenv").config()

const express= require("express")
const cors= require("cors")
const app= express()

const dbConnect= require("./config/mongo").default

app.use(cors())

const port= process.env.PORT || 3000


app.use('/Api', require('./routes/tracks'))

app.listen(port, () => {
    console.log( `la App esta corriendo en el localhost:${port}`)
})

dbConnect