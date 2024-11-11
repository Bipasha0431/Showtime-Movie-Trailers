import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import path from "path";
dotenv.config();

connectDB();
const PORT = process.env.PORT;
const app = express();

const _dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));
app.use("/api/v1/user", userRoute);

app.use(express.static(path.join(_dirname, "/client/build")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
