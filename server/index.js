const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharinf
const mysql = require('mysql2');
const dotenv = require('dotenv') // for our .env file
const bodyParser = require('body-parser')

dotenv.config(); //configuration

const db = mysql.createPool({ // using process.env to get the DB credentials
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const app = express();
app.use(cors()); // Middleware to access the front end 
app.use(bodyParser.json()) // Process data sent through HTTP request body
app.use(express.json());

app.get("/", (req, res) => { // Our Home Page GET request to print the page
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

app.get("/jan_22/get/:sr_no", (req, res) => { // GET Request to view the record of an individual cell
    const {sr_no} = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_22 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_21/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_21 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_20/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_20 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_19/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_19 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_18/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_18 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_17/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_17 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_16/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_16 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_15/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_15 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_14/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_14 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_13/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_13 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_12/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_12 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_11/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_11 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_10/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_10 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_09/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_09 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/jan_08/get/:sr_no", (req, res) => {
    const { sr_no } = req.params;
    const sqlGet = `SELECT * FROM nse_app.jan_08 where sr_no = ?`;
    db.query(sqlGet, sr_no, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.put("/jan_22/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_22 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_21/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_21 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_20/update/:sr_no", (req,res) => { // PUT Request to Update the information
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_20 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_19/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_19 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_18/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_18 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_17/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_17 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_16/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_16 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_15/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_15 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_14/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_14 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_13/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_13 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_12/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_12 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_11/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_11 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_10/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_10 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_09/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_09 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.put("/jan_08/update/:sr_no", (req,res) => {
    const { sr_no } = req.params;
    const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = req.body
    const sqlUpdate = `UPDATE nse_app.jan_08 SET security_symbol = ?, security_name = ?, industry = ?, equity_cap = ?, free_float = ?, weightage = ?, beta = ?, r2 = ?, volatility = ?, monthly_return = ?, avg_imp_cost = ? WHERE sr_no = ?`;
    db.query(sqlUpdate, [security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost, sr_no], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    }); 
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})