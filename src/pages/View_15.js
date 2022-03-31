import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './View.css'


const View = () => {
  const [ user, setUser ] = useState({})
  const { sr_no } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/jan_15/get/${sr_no}`)
        .then((resp) => setUser({...resp.data[0] }));
      }, [sr_no]);

  return (
    <div style={{marginTop: "150px"}}>
        <div className='card'>
          <div className='card-header'><p>Market Capitalization of </p></div>
        </div>
        <div className='container'>
          <strong>SR NO:</strong>
          <span>{sr_no}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Security Symbol</strong>
          <span>{user.security_symbol}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Security Name</strong>
          <span>{user.security_name}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Industry</strong>
          <span>{user.industry}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Equity</strong>
          <span>{user.equity_cap}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Free Float</strong>
          <span>{user.weightage}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Weightage</strong>
          <span>{user.weightage}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Beta</strong>
          <span>{user.beta}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>R2</strong>
          <span>{user.r2}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Volatility</strong>
          <span>{user.volatility}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Monthly Returns</strong>
          <span>{user.monthly_return}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <strong>Average Impact Cost</strong>
          <span>{user.avg_imp_cost}</span>
          <br  />
          <br  />
          <br  />
          <br  />
          <br  />
          <Link to="/jan_15">
            <div className='btn btn-edit'>Go Back</div>
          </Link>
        </div>
    </div>
  )
}

export default View