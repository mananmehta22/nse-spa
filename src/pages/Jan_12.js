import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import './Format.css'

const Jan_12 = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/jan_12");
    setData(response.data)
  };

  useEffect(() => {
    loadData(); 
  }, []);

  return (
    <div style={{marginTop: "160px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}>Security Symbol</th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
            <th style={{textAlign: "center"}}> </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.sr_no}>
                <th scope='row'>{index+1}</th>
                <td>{item.security_symbol}</td>
                <td>{item.security_name}</td>
                <td>{item.industry}</td>
                <td>{item.equity_cap}</td>
                <td>{item.free_float}</td>
                <td>{item.weightage}</td>
                <td>{item.beta}</td>
                <td>{item.r2}</td>
                <td>{item.volatility}</td>
                <td>{item.monthly_return}</td>
                <td>{item.avg_impact_cost}</td>
                <td>
                  <Link to={`/update_12/${item.sr_no}`}>
                  <button className='btn btn-edit'>Edit</button>
                  </Link>
                  <Link to={`/view_12/${item.sr_no}`}>
                  <button className='btn btn-view'>View</button>
                  </Link>
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
};

export default Jan_12