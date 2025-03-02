import express from 'express'
import homeRouter from "./routes/homeRouter.js";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
dotenv.config()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/', homeRouter)

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})

