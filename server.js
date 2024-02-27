import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// config env file
dotenv.config();

// database config
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(" <h1>welcome to ecommerce app</h1>");
});

// port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running in ${process.env.DEV_MODE} mode at port ${port}`);
});
