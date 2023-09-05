import mongoose from "mongoose";
import { app } from "./App";
interface msg{
    err:string
}
const port: undefined |number =8000
// const port: undefined |string =process.env.PORT
// const urlMongoDb:undefined | string=process.env.mongoDbUrl
const urlMongoDb:undefined | string="mongodb+srv://rizcode:4220149566771@cluster0.vdjhfwd.mongodb.net/?retryWrites=true&w=majority"
const startServer=async()=>{

    try{
        const result : object = await mongoose.connect(urlMongoDb )
        // console.log(result)
        app.listen(port,()=>{
            console.log('SEVER IS RUNNING>>>>>>>')
        })
    }
    catch(error){
        console.log('FAILD TO CONNECT DB');

        // console.log(error.message);
    }

}
startServer()