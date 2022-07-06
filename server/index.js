import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const URL = 'mongodb+srv://tetee14:Vetealaversh1@cluster0.qhvgj0m.mongodb.net/socialweb-app?retryWrites=true'
const PORT = process.env.PORT || 5000

mongoose
    .connect(URL)
    .then(app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => console.log(error))