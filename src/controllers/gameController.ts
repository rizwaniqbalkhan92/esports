import {Request, Response} from 'express';
import Games from '../models/Game';

export const getAllGames=async(req:Request,res:Response)=>{

    try{
        const games=await Games.find();
        if(games){
            return res.status(200).json(games);
        }

    }
    catch(error){
        return res.status(500).json({
            err:error
        })

    }
}
export const createGame=async(req:Request,res:Response)=>{

    try{
        const gameCreated=await Games.create(req?.body);
        if(gameCreated){
            return res.status(201).json(gameCreated);
        }

    }
    catch(error){
        return res.status(500).json({
            msg:"Could not create a game"
        })

    }
}