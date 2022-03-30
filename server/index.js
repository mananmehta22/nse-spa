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

app.get("jan_22/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = "SELECT * FROM nse_app.jan_22 where sr_no = ?";
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.put("jan_22/update/:sr_no", (res,req) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_impact_cost} = req.body
    const sqlUpdate = "UPDATE nse_app.jan_22 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_impact_cost = ? WHERE sr_no = ?";
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_impact_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})