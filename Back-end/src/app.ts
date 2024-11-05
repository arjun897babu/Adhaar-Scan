import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8080;
const ORIGIN = process.env.ORIGIN || "*";
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(
  cors({
    origin: ORIGIN,
    methods: ["GET", "POST"],
  })
);

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: "The requested URL was not found on this server",
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
