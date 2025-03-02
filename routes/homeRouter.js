import {Router} from 'express'
import HomeController from "../controllers/HomeController.js";

const homeRouter = Router()

homeRouter.post('/completions', HomeController.chatGPTCompletion)

export default homeRouter
