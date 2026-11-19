import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI missing");
}

const cached = (global.mongoose ??= {
  conn: null,
  promise: null,
});

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  const connectionPromise =
    cached.promise ??
    (cached.promise = mongoose.connect(MONGODB_URI, {
      maxPoolSize: 10,
      minPoolSize: 0,
      maxConnecting: 2,
    }));

  try {
    const connection = await connectionPromise;
    cached.conn = connection;

    return connection;
  } catch (error) {
    if (cached.promise === connectionPromise) cached.promise = null;

    throw error;
  }
};
