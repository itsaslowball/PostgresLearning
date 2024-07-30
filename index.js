const express = require('express');
const { Client } = require('pg');
const studentRoutes = require('./Routes/students')

const app = express();
app.use(express.json());

const client = new Client({
  host: "ep-soft-water-a5li3tz0.us-east-2.aws.neon.tech",
  port: 5432,
  database: "postreSQL",
  user: "postreSQL_owner",
  password: "5CXwDnkHv2RZ",
  ssl: {
    rejectUnauthorized: false,
  },
});

async function connectDb() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (e) {
    console.log(e);
    throw new Error("Error connecting to the database");
  }
}
connectDb();

app.use((req, res, next) => {
  req.client = client;
  next();
});

app.use('/api/v1/students', studentRoutes);

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen('8000', () => {
  console.log("Server is running on port 8000");
});