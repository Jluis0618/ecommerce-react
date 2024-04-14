import express from "express"
import cors from 'cors'
import router from './routes/products.js'
import routerUser from './routes/users.js'
import routerCart from "./routes/cartProducts.js"
import routerPaypal from "./routes/paypal.js"
import connectionDb from "./dbconnection.js";
const app = express();
const port = 3000

connectionDb();
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use('/api', routerUser)
app.use('/api', routerCart)
app.use('/api', routerPaypal)

app.listen(port, () => {
    console.log(`The server is running in http://localhost:${port}`)
})