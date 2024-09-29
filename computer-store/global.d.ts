import { MongoClient } from "mongodb";

declare global {
  // This will extend the global object to include _mongoClientPromise
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};

  