const mongoose = require("mongoose");

const TickerSchema = new mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String,
});

const Ticker = mongoose.model("Ticker", TickerSchema);
module.exports = Ticker;
