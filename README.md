# Hodlinfo-quadB
Internship assignment

# Screenshot
![quadB](https://user-images.githubusercontent.com/79903746/236672220-e7ee48c4-e358-4899-8ad1-b8900f1fe045.png)

# Environment Variables
```sh
PORT
MONGO_URI
```
# Installation
1. Clone the git repo
```sh
git clone git@github.com:Kunal-Vijay/Hodlinfo-quadB.git
```
2. Install dependencies
```sh
npm install
```

3. Start the backend
```sh
cd backend
npm rum start
```
4. Start the frontend
```sh
cd frontend
npm rum start
```

# Routes
 1. Fetch data from API and store in MongoDB
```sh
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
```
![database](https://user-images.githubusercontent.com/79903746/236672341-f3f5ee59-9868-4875-b606-0c3adc6fe99e.png)

2. Route to get stored data from MongoDB
```sh
app.get("/get-data", async (req, res) => {
  try {
    const tickers = await Ticker.find();
    res.json(tickers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from database");
  }
});
```
![image](https://user-images.githubusercontent.com/79903746/236672488-ee06eda2-57bf-4506-81e5-cd9171dcff12.png)

3. Route to delete all stored data from MongoDB
```sh
app.delete("/delete-data", async (req, res) => {
  try {
    const result = await Ticker.deleteMany();
    res
      .status(200)
      .json({ message: "All data deleted", deletedCount: result.deletedCount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting data from database");
  }
});
```
![image](https://user-images.githubusercontent.com/79903746/236672502-0e017073-d8e5-49e3-a83d-a30ad8b52a14.png)
