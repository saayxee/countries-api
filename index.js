const fs = require("fs");
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
  message: '{ "status" : "429", "message": "Too many requests." }',
});

// Apply rate limiting to all requests
app.use(limiter);

// Countries route
app.get("/countries/", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(
    JSON.stringify({
      statusCode: "200",
      OK: true,
      data: [
        ...data["Africa"],
        ...data["Asia"],
        ...data["Europe"],
        ...data["South America"],
        ...data["North America"],
        ...data["Oceania"],
      ].sort((a, b) => a.name.localeCompare(b.name, "en")),
    })
  );
});
app.get("/countries/africa", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify({ statusCode: "200", OK: true, data: data.Africa }));
});
app.get("/countries/asia", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify({ statusCode: "200", OK: true, data: data["Asia"] }));
});
app.get("/countries/europe", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify({ statusCode: "200", OK: true, data: data["Europe"] }));
});
app.get("/countries/south-america", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify({ statusCode: "200", OK: true, data: data["South America"] }));
});
app.get("/countries/north-america", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify({ statusCode: "200", OK: true, data: data["North America"] }));
});
app.get("/countries/oceania", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify({ statusCode: "200", OK: true, data: data["Oceania"] }));
});

// Main route
app.get("/", (_, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(
    JSON.stringify({
      statusCode: "200",
      OK: true,
    })
  );
});

app.use((req, res) => {
  res.status(404).json({
    statusCode: "404",
    OK: false,
  });
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
