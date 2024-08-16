const TelegramBot = require('node-telegram-bot-api');
const stt = require('./model/stt');

// Replace with your own Telegram bot token
const token = '7243620292:AAFb8L_bsQLPCOR1WM_c3rfaKJ2Gy6L6v9U';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const sendWelcomeMessage = (chatId, userName) => {
    const welcomeMessage = `Welcome, ${userName}! This is the Emergency Service Dispatch Bot. 
    If you need assistance, please provide your location and the nature of your emergency, 
    and we will dispatch help immediately.`;
    
    bot.sendMessage(chatId, welcomeMessage);
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

        // Respond to the user
        bot.sendMessage(chatId, 'Voice note received. Our team is reviewing your emergency.');

        // Here you can add code to transcribe the voice note or take further action

    } catch (error) {
        console.error('Error handling voice note:', error);
        bot.sendMessage(chatId, 'Sorry, there was an error processing your voice note.');
    }
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'You can use the following commands:\n/start - Start the bot\n/help - Get help');
});

// Export the bot for potential future use in other files
module.exports = bot;
