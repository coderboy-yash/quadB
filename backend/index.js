const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const Ticker = require("./models/tickerModel");
const axios = require("axios");

dotenv.config();
connectDB();
const app = express();

// Enable CORS for all routes

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Fetch data from API and store in MongoDB
app.get("/fetch-data", async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(response.data);
    const topTickers = tickers.slice(0, 10);

    const topTickerData = topTickers.map((ticker) => {
      return {
        name: ticker.name,
        last: parseFloat(ticker.last),
        buy: parseFloat(ticker.buy),
        sell: parseFloat(ticker.sell),
        volume: parseFloat(ticker.volume),
        base_unit: ticker.base_unit,
      };
    });

    const savedTickers = await Ticker.insertMany(topTickerData);
    res.json(savedTickers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from API");
  }
});

// Route to get stored data from MongoDB
app.get("/get-data", async (req, res) => {
  try {
    const tickers = await Ticker.find();
    res.json(tickers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from database");
  }
});

// Route to delete all stored data from MongoDB
app.delete("/delete-data", async (req, res) => {
  try {
    const result = await Ticker.deleteMany();
    console.log(result);
    res
      .status(200)
      .json({ message: "All data deleted", deletedCount: result.deletedCount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting data from database");
  }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}...`);
});
