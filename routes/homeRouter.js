import {Router} from 'express'
import HomeController from "../controllers/HomeController.js";
import multer from "multer";

const homeRouter = Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname
        cb(null, uniqueSuffix)
    }
})


const upload = multer({
    storage
})

homeRouter.post('/completions', HomeController.chatGPTCompletion)
homeRouter.post('/images', HomeController.dalleImageGenerator)
homeRouter.post('/images/upload', upload.single('image'), HomeController.dalleImageEditor)
// homeRouter.post('/images/variations', HomeController.dalleImagevariations)

export default homeRouter
