import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { UserRoute } from "./routes/UserRoute.js";
import { RoomRoute } from "./routes/RoomRoute.js";
import cors from 'cors';
import session from "express-session";

const app = express();
//app.use(dotenv.config())
app.set("trust proxy", 1);
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "sessionss",
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: "strict",
      // httpOnly: false,
      secure: true,
    },
  })
);
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Allow requests from the frontend application
app.use(cookieParser());
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
