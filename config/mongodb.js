import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV } from "./env.js";

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.<development/>production>.local"
  );
}

const connectingToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`MongoDb is connected to the env: ${NODE_ENV}`);
  } catch (err) {
    console.error("Failed to connecting to databaase: ", err);
    process.exit(1);
  }
};

export default connectingToDatabase;
