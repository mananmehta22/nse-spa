import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Format.css'
import { toast } from 'react-toastify'
import axios from 'axios';


const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/"); // Fetch our data for the specific year, in this case 20222
    setData(response.data)
  };

  useEffect(() => { // Updating our DOM 
    loadData(); 
  }, []);

  return (
    <div style={{marginTop: "160px"}}>
      <h1>January 2022 Report</h1>
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
                <td>{item.avg_imp_cost}</td>
                <td>
                  <Link to={`/update_22/${item.sr_no}`}>
                  <button className='btn btn-edit'>Edit</button> // Edit button, taking us to the AddEdit page
                  </Link>
                  <Link to={`/view_22/${item.sr_no}`}>
                  <button className='btn btn-view'>View</button> // View button, taking us to the View Page
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
}

export default Home