import { readFile } from "fs/promises";

import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Job.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );
    await Job.create(jsonProducts);

    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

start();
