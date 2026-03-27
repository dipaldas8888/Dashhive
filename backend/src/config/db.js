import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not configured");
  }

  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected");
};

export default connectDB;
