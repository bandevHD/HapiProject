import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connection URL
mongoose.set('strictQuery', false);

export const main = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_ATLAS);
    if (conn.connection.readyState === 1) console.log(`Database connect success`);
    return conn;
  } catch (error) {
    console.log(`Database connect failed`);
    throw new Error(error);
  }
}

