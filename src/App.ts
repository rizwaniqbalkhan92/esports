import express,{Application,Request,Response} from 'express';
import cors from 'cors';
import 'dotenv/config';
import gameRoutes  from './routes/gameRoutes'

const app:Application=express();
app.use(express.json());
app.use(cors())
app.get('/',(req:Request,res:Response)=>{
    res.send({message:"RUNNING..."})
})

app.use('/api/games',gameRoutes)

export {app}

