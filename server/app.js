import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/db.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

// DATABASE CONNECTION

connectDB();

const app = express();

// MIDDLEWARES

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

// ROUTES

app.use("/api/leads", leadRoutes);

// HEALTH CHECK ROUTE

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message:
      "Simplifiq API is running",
  });
});

// NOT FOUND HANDLER

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// SERVER

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});