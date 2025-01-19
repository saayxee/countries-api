const fs = require("fs")
const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

// Get data from "countries.json" 
const data = JSON.parse(fs.readFileSync("./countries.json"));

// Apply rate limiting 
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute 
  max: 60, // limit each IP to 60 requests per [windowMs] 
  message: '{ \"status\" : \"429\", \"message\": \"Too many requests.\" }',
});

// Apply rate limiting to all requests 
app.use(limiter);

// Example route 
app.get("/countries/", (_, res) => {
  res.setHeader("Content-type", "application/json")
  res.send('{ "status" : "200", "data": ' + JSON.stringify(data) + ' }');
});

// Start server 
app.listen(port, () => { console.log(`Server running at http://localhost:${port}`); });