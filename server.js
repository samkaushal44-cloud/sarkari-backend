import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const jobs = [
  {
    title: "SSC CHSL Recruitment 2026",
    link: "https://ssc.nic.in",
    category: "Central Govt",
    date: "2026-01-07"
  },
  {
    title: "Railway Group D Vacancy",
    link: "https://rrbcdg.gov.in",
    category: "Railway",
    date: "2026-01-07"
  }
];

// Home route
app.get("/", (req, res) => {
  res.send("Sarkari Jobs API is running");
});

// ✅ JOBS API ROUTE
app.get("/jobs", (req, res) => {
  res.json(jobs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
