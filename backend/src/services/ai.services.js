const {GoogleGEnAI} = require("@google/genai"


const ai = new GoogleGenAI({
    apiKey = process.env.GEMINI_API

})

async function invoteGeminiAPi({
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash"
        content : " Hello gemin ! Explain What is Interview "
    })
    console.log(response.txt )

})

module.exports = invokeGeminiAi