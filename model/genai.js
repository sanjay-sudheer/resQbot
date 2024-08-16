import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyANgcDRmfbKkSGt9o7JbD1dGVhIoxjlAdU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const voiceTranscription = "i have a minor headache i am  in california";



const prompt = `
Extract the location(place), illness, and priority(low,medium,high) from the following transcription and return it stricty in JSON format as plain text:
"${voiceTranscription}"

Format:
{
  "location": "",
  "illness": "",
  "priority": ""
}
`;

const result = await model.generateContent(prompt);
const cleanedRes = result.response.text().replace(/```json|```/g, '').trim();
console.log(JSON.parse(cleanedRes));
