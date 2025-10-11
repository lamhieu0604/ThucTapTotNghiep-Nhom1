// db.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "ThucTapTotNghiep";

let dbInstance;

async function connectToMongo() {
  try {
    await client.connect();
    dbInstance = client.db(dbName);
    console.log("✅ Connected to MongoDB:", dbName);
  } catch (err) {
    throw err;
  }
}

function getDb() {
  if (!dbInstance) throw new Error("MongoDB not connected yet");
  return dbInstance;
}

module.exports = { connectToMongo, getDb };
