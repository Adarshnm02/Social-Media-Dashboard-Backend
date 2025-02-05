import express,  { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from 'morgan'

import 'dotenv/config';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

const MONGODB_URI = process.env.MONGODB_URI;
if(!MONGODB_URI){
    console.error("Error: MONGODB_URI is not defined in the environment variable");
    process.exit(1)
}
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB Connection error:', err))

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Express Server is Running!");
  });

const PORT =  process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
