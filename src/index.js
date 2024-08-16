import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({path: "./env"});

connectDB()
.then()
.catch((err) => {
    console.log("mongo db connection got 20/100 in test and failed",err);
})