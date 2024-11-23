require("dotenv").config();

const { getNews, getTopheadlines, getCountryNews, getCatagoryNews, Search } = require("./controller/newsController")

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;


app.get("/news", getNews);
app.get("/top-headlines/:category", getCatagoryNews);
app.get("/top-headlines", getTopheadlines);
app.get("/country/:iso", getCountryNews);
app.get("/everything/:query", Search);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});

