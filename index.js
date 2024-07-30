
const express = require('express');
const { Client } = require('pg');
const studentRoutes = require('./Routes/students');

const app = express();
app.use(express.json());

const client = new Client({
  host: process.env.HOST,
  port: 5432,
  database: "postreSQL",
  user: process.env.USER,
  password: process.env.PASSWORD,
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
