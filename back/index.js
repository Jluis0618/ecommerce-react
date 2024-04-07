import express from "express"
import cors from 'cors'
import router from './routes/products.js'
import connectionDb from "./dbconnection.js";
const app = express();
const port = 3000

connectionDb();

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`The server is running in http://localhost:${port}`)
})