const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nse_app"
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_22";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})