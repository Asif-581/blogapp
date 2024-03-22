const express = require('express');
const app = express();
const cors = require("cors");
const post = require('./src/routers/post')
const db = require('./src/db/db');
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/posts", post);

const initApp = async () => {
  console.log("Testing the database connection..");
  
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

  } catch (error) {
    console.error("Unable to connect to the database:", error.original);
  }
};

initApp();

db
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server started");
});