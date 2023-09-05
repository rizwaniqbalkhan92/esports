import { Router } from "express"
import { createGame, getAllGames } from "../controllers/gameController"


const router : Router=Router();

router.get('/',getAllGames);
router.post('/gameCreate',createGame);


export default router;

