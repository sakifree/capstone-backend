/********************************** */
// DEPENDENCIES
/********************************** */
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const { PORT = 3333, DATABASE_URL } = process.env

const app = express()


/********************************** */
// MIDDLEWARE
/********************************** */
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

/********************************** */
// ROUTES
/********************************** */
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

/********************************** */
// SERVER LISTENER
/********************************** */
app.listen(PORT, () => {
    console.log(`I wanna dance with somebody on PORT: ${PORT}`)
})