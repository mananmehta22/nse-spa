import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="header">
      <p className="logo">NSE Monthly Reports</p>
      <div className="header-right">
        <Link to="/">
            <p className={`${activeTab === "Home"} ? "active" :""`} onClick={() => setActiveTab("Home")}>
            Home
            </p>
        </Link>
        <Link to="/update">
        <p className={`${activeTab === "AddEdit"} ? "active" :""`} onClick={() => setActiveTab("Home")}>
            Home
            </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
