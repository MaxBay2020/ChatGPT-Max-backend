import OpenAI from 'openai'

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
        }
    }
}


export default HomeController
