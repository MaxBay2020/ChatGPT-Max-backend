import OpenAI from 'openai'
import fs from 'fs'
import multer from 'multer'


class HomeController{
    static chatGPTCompletion = async (req, res) => {
        try{
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_KEY
            })
            const { userMessage: content } = req.body

            const completion = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'user',
                        content
                    }
                ],
                max_tokens: 100
            })

            return res.status(200).send(completion)
        }catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    }

    static dalleImageGenerator = async (req, res) => {

        const { prompt } = req.body

        // const prompt = "A cute baby sea otter"

        try{
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_KEY
            })

            const response =  await openai.images.generate({
                model: "dall-e-2",
                prompt,
                n: 4,
                size: '1024x1024'
            })

            return res.status(200).send(response.data)

        }catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    }

    static dalleImageEditor = async (req, res) => {

        const imagePath = req.file.path


        try{
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_KEY
            })

            const response =  await openai.images.createVariation({
                model: "dall-e-2",
                image: fs.createReadStream(imagePath),
                n: 4
            })

            console.log(response)

            return res.status(200).send(response.data)

        }catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    }
}


export default HomeController
