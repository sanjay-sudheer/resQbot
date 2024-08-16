import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyANgcDRmfbKkSGt9o7JbD1dGVhIoxjlAdU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
import { connectDB } from "./db.js";
import Emergency from "./emergency.js";



const saveEmergencyData = async (data) => {
  try {
    const emergency = new Emergency(data);
    await emergency.save();
    console.log('Emergency data saved:', emergency);
  } catch (err) {
    console.error(err.message);
  }
};


export const handleEmergency = async (transcription) => {
  connectDB();
  const prompt = `
  Extract the location(place), illness, and priority(low,medium,high) from the following transcription and return it stricty in JSON format as plain text:
  "${transcription}"
  
  Format:
  {
    "location": "",
    "illness": "",
    "priority": ""
  }
  `;

  const result = await model.generateContent(prompt);
  const cleanedRes = result.response.text().replace(/```json|```/g, '').trim();
  await saveEmergencyData(JSON.parse(cleanedRes));
  console.log(JSON.parse(cleanedRes));
}








