import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import connectDB from "./mongodb/connect.js";

import userRouter from "./routes/user.routes.js"
import propertyRouter from "./routes/property.routes.js"


dotenv.config();

const app = express();
// adding miidlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send({ message: "Hello World!" })
})

// using routes by middlewares

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);



const startServer = async () => {
    try {
        // connect to database
        connectDB(process.env.MONGODB_URL)

        app.listen(8080, () => {
            console.log("Server has started on http://localhost:8080")
        })

    } catch (error) {
        console.log(error)
    }
}
startServer();