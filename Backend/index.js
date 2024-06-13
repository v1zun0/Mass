import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
  await Users.sync();
} catch (error) {
  console.error(error);
}

app.use(
  cors({
    origin: "http://localhost:5173", // Izinkan permintaan dari asal ini
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
