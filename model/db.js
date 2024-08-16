import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sanjaysudheer:admin123@resqbot.rk4ih.mongodb.net/?retryWrites=true&w=majority&appName=resQbot', {
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); 
  }
};
