// import { config } from "dotenv";
// import app from "./app";
import appInstance from './app'; // Import the Express application instance
import config from './app/config';

import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    appInstance.app.listen(config.port, () => {
      // Use config.port instead of appInstance.port
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
