import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({path: "./env"});

connectDB()
.then(()=>{
    app.on("error",(error) => {
        console.log(error,"error occurred ..main")
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log("server started at port",process.env.PORT);
    })
})
.catch((err) => {
    console.log("mongo db connection got 20/100 in test and failed",err);
})