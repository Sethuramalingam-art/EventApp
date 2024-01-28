import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

//caching the DB connection
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  //caching the DB connection
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");
  //caching the DB connection.
  //Workign with serverless architecture, server actions should create each and every time unwanted db connections
  //so we can cach it to avoid multiple connections which use existing conection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
