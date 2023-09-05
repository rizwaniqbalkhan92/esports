import { Schema, model } from "mongoose"

export interface Game{
    address:string,
    date:Date,
    time:string,
    numOfPeople:number
    fieldNumber:number
}


const GameSchema=new Schema<Game>({

    address:{
        type:String,
        required:true
    }
    ,
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    numOfPeople:{
        type:Number,
        required:true
    },
    fieldNumber:{
        type:Number,
        required:true
    }
})


export default model<Game>('Game',GameSchema);