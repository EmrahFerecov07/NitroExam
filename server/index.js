import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/productRoute.js"

const app = express()


app.use(express.json())
app.use(cors())


dotenv.config()
const password = process.env.PASSWORD
const url = process.env.CONNECTION_URL.replace("<password>",password)
const port = process.env.PORT

app.use("/api/product",router)

 mongoose.connect(url).then(res=>console.log("Database Connected")).catch(err =>console.log(`Ehmed yox ${err}`))
 app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
  })    