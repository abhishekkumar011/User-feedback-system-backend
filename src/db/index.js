import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MONGODB connected");
  } catch (error) {
    console.log("MONGODB connection FAILED! ", error);
    //Stop node.js app when the connection fails
    process.exit(1);
  }
};

export default connectDB;
