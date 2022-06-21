import mongoose from "mongoose";

import type { Mongoose } from "mongoose";

let retriesCount = 0;
const maxRetriesCount = 5;
const connectionString = process.env.DB_ADDR!;

const options = {
  autoIndex: false,
};

export const connectToDatabase = () =>
  new Promise<Mongoose>((resolve, reject) => {
    mongoose
      .connect(connectionString, options)
      .then((connection) => {
        console.log("MongoDB Database connection established successfully.");
        resolve(connection);
      })
      .catch(() => {
        if (++retriesCount === maxRetriesCount) {
          return reject(new Error("Unable to connect to MongoDB connection."));
        }

        console.log("MongoDB connection unsuccessful, retry after 5 seconds. ", retriesCount);
        setTimeout(() => {
          connectToDatabase().then(resolve);
        }, 5000);
      });
  });
