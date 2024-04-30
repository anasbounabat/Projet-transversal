import express from "express";
import router from "./routes/start.js";
import "./config/prisma.js"
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", router);

const initializeApp = () => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/`);
  });
};

initializeApp();
