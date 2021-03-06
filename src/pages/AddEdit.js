import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import axios from 'axios';
import { toast } from 'react-toastify'
import './EditTemplate.css'

const initialState = { // We will save the initial data using initialState
  sr_no: "",
  security_symbol: "",
  security_name: "",
  industry:"",
  equity_cap:"",
  free_float:"",
  weightage:"",
  beta:"",
  r2:"",
  volatility:"",
  monthly_return:"",
  avg_impact_cost:"",
}

const AddEdit = () => {
  const [ state, setState ] = useState(initialState); // we will store the initial and current or updated value using useState Hook
  const {security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_imp_cost} = state;

  const history = useNavigate(); // After the form is submitted, useNavigate will help to redirect user to a specific URL

  const {sr_no} = useParams(); // To get the parameter requested by the user

  useEffect(() => {
    axios.get(`http://localhost:5000/jan_22/get/${sr_no}`) // It will return the response object from the URL mentioned from an endpoint
    .then((resp) => setState({ ...resp.data[0] }))
    
  }, [sr_no]) 

  const handleSubmit = (e) => {
    e.preventDefault(); // Default Action will not occur as it cancels the event, if cancelable
    if (!security_symbol || ! security_name || !industry || !equity_cap || !free_float || !weightage || !r2 || !volatility || !monthly_return || !avg_imp_cost) {
        toast.error("Please provide value for each field");
    }
    else
      if(sr_no) {
      axios.put(`http://localhost:5000/jan_22/update/${sr_no}`, { // Overwrite the data at a specific endpoint
              security_symbol, 
              security_name, 
              industry, 
              equity_cap, 
              free_float, 
              weightage, 
              beta, 
              r2, 
              volatility, 
              monthly_return, 
              avg_imp_cost
          })
          .then(() => {
            setState({ security_symbol:"", security_name:"", industry:"", equity_cap:"", free_float:"", weightage:"", beta:"", r2:"", volatility:"", monthly_return:"", avg_imp_cost:"" })
          })
          .catch((err) => toast.error(err.response.data));
      toast.success("Fields Updated Successfully") // Toast is like a Pop Up but more aesthetically pleasing
    }
    setTimeout(() => history("/"),1000);
  };

  const handleInputChange = (e) => { // Any Input by the user, will be registered by handleinputChange
    const { security_symbol, value } = e.target;
    setState({ ...state, [security_symbol]: value
    });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      > 
          <label htmlFor="Security Symbol">Security Symbol</label>
          <input
            type="text" 
            id="security_symbol" 
            name="security_symbol"
            placeholder='Enter Security Symbol ...' value={ security_symbol } onChange={handleInputChange} />
          <label htmlFor='Security Name'>Security Name</label>
          <input type="text" id="security_name" placeholder='Enter Security Name ...' onChange={handleInputChange} value={security_name || ""} />
          <label htmlFor='Industry'>Industry</label>
          <input type="text" id="industry" placeholder='Enter Industry ...' onChange={handleInputChange} value={industry} />
          <label htmlFor='Equity Cap'>Equity Cap</label>
          <input type="number" id="equity_cap" placeholder='Enter Equity ...' onChange={handleInputChange} value={equity_cap || ""} />
          <label htmlFor='Free Float'>Free Float</label>
          <input type="number" id="free_float" placeholder='Enter Free Float Market Cap ...' onChange={handleInputChange} value={free_float || ""} />
          <label htmlFor='Weightage'>Weightage</label>
          <input type="number" id="weightage" placeholder='Enter Weightage ...' onChange={handleInputChange} value={weightage || ""} />
          <label htmlFor='Beta'>Beta</label>
          <input type="number" id="beta" placeholder='Enter Beta ...' onChange={handleInputChange} value={beta || ""} />
          <label htmlFor='r2'>R2</label>
          <input type="number" id="r2" placeholder='Enter R2 ...' onChange={handleInputChange} value={r2 || ""} />
          <label htmlFor='Volatility'>Volatility</label>
          <input type="number" id="volatility" placeholder='Enter Volatility ...' onChange={handleInputChange} value={volatility || ""} /> 
          <label htmlFor='Monthly Return'>Monthly Return</label>
          <input type="number" id="monthly_return" placeholder='Enter Monthly Return ...' onChange={handleInputChange} value={monthly_return || ""} />
          <label htmlFor='Average Impact Cost'>Average Impact Cost</label>
          <input type="number" id="avg_imp_cost" placeholder='Enter Average Impact Cost ...' onChange={handleInputChange} value={avg_imp_cost || ""} />
          <input type="submit" value="Update" />
          <Link to="/">
            <input type="button" value="Go Back" />
          </Link>
      </form>
    </div>
  );
};

export default AddEdit