const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const sqlConfig = {
  user: "sa",
  password: "BenMullaly2023!",
  server: "localhost",
  port: 1433,
  database: "insight_2_weather",
  options: {
    trustServerCertificate: true, //change to false for deploy
    enableArithAbort: true,
  },
};

const options = {
  setHeaders(res, path, stat) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  },
};

const axios = require("axios");
const app = express(options);
app.use(cors());
app.use(bodyParser.json());
const port = "5050";

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=1707+Preyer+Ave+Cleveland+Heights+OH&benchmark=Public_AR_Current&format=jsongit "
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/data", async (req, res) => {
  const url = req.body.newURL;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  //res.json({ message: 'POST request received' });
});

app.post("/api/data/nws", async (req, res) => {
  const url = req.body.newURL;
  try {
    // const http = axios.create({
    //   baseURL: "https://api.weather.gov"
    // });

    let office = await axios.get(url);

    const response = await axios.get(
      `https://api.weather.gov/gridpoints/${office.data.properties.gridId}/${office.data.properties.gridX},${office.data.properties.gridY}/forecast`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const pool = new sql.ConnectionPool(sqlConfig);
const poolConnect = pool.connect();

poolConnect
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.get("/user/test", async (req, res) => {
  try {
    const request = pool.request();
    const result = await request.query("SELECT user_role FROM users");
    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.post("/user/register", async (req, res) => {
  try {
    const request = pool.request();
    let user = req.body.username;
    let password = req.body.password;
    let salt = req.body.salt;
    let role = req.body.role;
    if (user === null || password === null || salt === null || role === null) {
      throw Error("Something's missing to register");
    }
    const result = await request.query(
      `INSERT INTO users (username, password_hash, salt, user_role) OUTPUT INSERTED.[username] VALUES ('${user}', '${password}', '${salt}', '${role}') `
    );
    res.json(result.recordset);
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ error: "Error registering user" });
  }
});

// app.post("/user/login", async (req, req) => {

// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.listen(80);
