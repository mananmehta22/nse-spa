import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

useEffect(() => {
  if(location.pathname === "/"){
    setActiveTab("Home")
  }
    else if(location.pathname === "/jan_08") {
      setActiveTab("Jan_08")
    }
    else if(location.pathname === "/jan_09") {
      setActiveTab("Jan_09")
    }
    else if(location.pathname === "/jan_10") {
      setActiveTab("Jan_10")
    }
    else if(location.pathname === "/jan_11") {
      setActiveTab("Jan_11")
    }
    else if(location.pathname === "/jan_12") {
      setActiveTab("Jan_12")
    }
    else if(location.pathname === "/jan_13") {
      setActiveTab("Jan_13")
    }
    else if(location.pathname === "/jan_14") {
      setActiveTab("Jan_14")
    }
    else if(location.pathname === "/jan_15") {
      setActiveTab("Jan_15")
    }
    else if(location.pathname === "/jan_16") {
      setActiveTab("Jan_16")
    }
    else if(location.pathname === "/jan_17") {
      setActiveTab("Jan_17")
    }
    else if(location.pathname === "/jan_18") {
      setActiveTab("Jan_18")
    }
    else if(location.pathname === "/jan_19") {
      setActiveTab("Jan_19")
    }
    else if(location.pathname === "/jan_20") {
      setActiveTab("Jan_20")
    }
    else if(location.pathname === "/jan_21") {
      setActiveTab("Jan_21")
    } 
  },[location]);

  return (
    <div className="header">
      <Link to="/" >
      <p className="logo" >NSE Monthly Reports
      </p>
      </Link>
      <div className="header-right">
        <Link to="/jan_08">
            <p 
                className={`${activeTab === "Jan_08"} ? "active" :""`} onClick={() => setActiveTab("Jan_08")}
                >
            Jan_08
            </p>
        </Link>
        <Link to="/jan_09">
        <p 
            className={`${activeTab === "Jan_09"} ? "active" :""`} onClick={() => setActiveTab("Jan_09")}
            >
            Jan_09
            </p>
        </Link>
        <Link to="/jan_10">
        <p 
            className={`${activeTab === "Jan_10"} ? "active" :""`} onClick={() => setActiveTab("Jan_10")}>
            Jan_10
            </p>
        </Link>
        <Link to="/jan_11">
        <p 
            className={`${activeTab === "Jan_11"} ? "active" :""`} onClick={() => setActiveTab("Jan_11")}
            >
            Jan_11
            </p>
        </Link>
        <Link to="/jan_12">
        <p className={`${activeTab === "Jan_12"} ? "active" :""`} onClick={() => setActiveTab("Jan_12")}>
            Jan_12
            </p>
        </Link>
        <Link to="/jan_13">
        <p className={`${activeTab === "Jan_13"} ? "active" :""`} onClick={() => setActiveTab("Jan_13")}>
            Jan_13
            </p>
        </Link>
        <Link to="/jan_14">
        <p className={`${activeTab === "Jan_14"} ? "active" :""`} onClick={() => setActiveTab("Jan_14")}>
            Jan_14
            </p>
        </Link>
        <Link to="/jan_15">
        <p className={`${activeTab === "Jan_15"} ? "active" :""`} onClick={() => setActiveTab("Jan_15")}>
            Jan_15
            </p>
        </Link>
        <Link to="/jan_16">
        <p className={`${activeTab === "Jan_16"} ? "active" :""`} onClick={() => setActiveTab("Jan_16")}>
            Jan_16
            </p>
        </Link>
        <Link to="/jan_17">
        <p className={`${activeTab === "Jan_17"} ? "active" :""`} onClick={() => setActiveTab("Jan_17")}>
            Jan_17
            </p>
        </Link>
        <Link to="/jan_18">
        <p className={`${activeTab === "Jan_18"} ? "active" :""`} onClick={() => setActiveTab("Jan_18")}>
            Jan_18
            </p>
        </Link>
        <Link to="/jan_19">
        <p className={`${activeTab === "Jan_19"} ? "active" :""`} onClick={() => setActiveTab("Jan_19")}>
            Jan_19
            </p>
        </Link>
        <Link to="/jan_20">
        <p className={`${activeTab === "Jan_20"} ? "active" :""`} onClick={() => setActiveTab("Jan_20")}>
            Jan_20
            </p>
        </Link>
        <Link to="/jan_21">
        <p className={`${activeTab === "Jan_21"} ? "active" :""`} onClick={() => setActiveTab("Jan_21")}>
            Jan_21
            </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
