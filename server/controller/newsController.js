const asyncHandler = require("express-async-handler");
const { newsFetch } = require ("../../utils/newsFetch");

const getNews = asyncHandler(async (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 20;
    let page = parseInt(req.query.page) || 1;
    let q = req.query.q || "nepal";

    let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
    const result = await newsFetch(url);
    res.status(result.status).json(result);
});

const getTopheadlines = asyncHandler(async (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 20;
  let page = parseInt(req.query.page) || 1;
  let category = req.query.category || "general";

  let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
  const result = await newsFetch(url);
  res.status(result.status).json(result);
});

const getCountryNews = asyncHandler(async (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 20;
  let page = parseInt(req.query.page) || 1;
    const country = req.params.iso;

  let url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
  const result = await newsFetch(url);
  res.status(result.status).json(result);
});

module.exports = { getNews, getTopheadlines, getCountryNews };
