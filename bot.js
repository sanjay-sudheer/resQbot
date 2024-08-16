import TelegramBot from 'node-telegram-bot-api';
import stt from './model/stt.cjs';
import { handleEmergency } from './model/genai.js';

// Replace with your own Telegram bot token
const token = '7243620292:AAFb8L_bsQLPCOR1WM_c3rfaKJ2Gy6L6v9U';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const sendWelcomeMessage = (chatId, userName) => {
    const welcomeMessage = `Welcome, ${userName}! This is the Emergency Service Dispatch Bot. 
    Please share your location so we can assist you.`;
    
    const options = {
        reply_markup: {
            keyboard: [[{ text: 'Send Location', request_location: true }]],
            one_time_keyboard: true
        }
    };
    
    bot.sendMessage(chatId, welcomeMessage, options);
};

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userName = msg.from.first_name || 'User';
    sendWelcomeMessage(chatId, userName);
});

bot.on('voice', async (msg) => {
    const chatId = msg.chat.id;

    // Get the file ID of the voice note
    const fileId = msg.voice.file_id;

    try {
        // Get the file path
        const file = await bot.getFile(fileId);
        const filePath = file.file_path;

        // Download the file
        const url = `https://api.telegram.org/file/bot${token}/${filePath}`;
       
        const text = await stt(url);
        await handleEmergency(text);

        // Respond to the user
        bot.sendMessage(chatId, 'Voice note received. Our team is reviewing your emergency.');

        // Here you can add code to transcribe the voice note or take further action

    } catch (error) {
        console.error('Error handling voice note:', error);
        bot.sendMessage(chatId, 'Sorry, there was an error processing your voice note.');
    }
});


bot.on('location', async (msg) => {
    const chatId = msg.chat.id;
    const { latitude, longitude } = msg.location;

    // Handle the location data
    console.log(`Received location: Latitude ${latitude}, Longitude ${longitude}`);

    bot.sendMessage(chatId, 'Location received. Our team is on the way to assist you.');
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'You can use the following commands:\n/start - Start the bot\n/help - Get help');
});


