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

app.get("/jan_21", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_21";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_20", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_20";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_19", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_19";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_18", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_18";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_17", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_17";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_16", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_16";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_15", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_15";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_14", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_14";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_13", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_13";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_12", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_12";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_11", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_11";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_10", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_10";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_09", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_09";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})

app.get("/jan_08", (req, res) => {
    const sqlShow = "SELECT * FROM nse_app.jan_08";
    db.query(sqlShow, (err, result) => {
        console.log("Error", err);
        console.log("Result", result);
        res.send(result)
    })
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})