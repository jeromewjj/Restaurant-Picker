import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { UserRoute } from "./routes/UserRoute.js";
import { RoomRoute } from "./routes/RoomRoute.js";
import cors from 'cors'
const app = express();
//app.use(dotenv.config())
app.use(cookieParser());
app.use(cors());
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    const mongooseData = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(process.env.MONGODB_URL, mongooseData);
    console.log(`Database connected, Listening at Port:${PORT}`);
  } catch (err) {
    console.log("Failed to coonect to MongoDB");
  }
});

app.use("/user", UserRoute);
app.use("/room", RoomRoute);

export { app };
