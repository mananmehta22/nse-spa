import React, { useState, useEffect } from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

const initialState = {
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
  avg_impact_cost:""
}

const AddEdit = () => {
  const [ state, setState ] = useState(initialState);
  const { security_symbol, security_name, industry, equity_cap, free_float, weightage, beta, r2, volatility, monthly_return, avg_impact_cost } = state;

  const history = useHistory();

  const {sr_no} = useParams(); 

  useEffect(() => {
    
  }) 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    let { sr_no, value } = e.target;
    setState({ ...state, [sr_no]: value });
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
      > 
          <label htmlFor='Security Symbol'>Security Symbol</label>
          <input type="text" id="security_symbol" placeholder='Enter Security Symbol ...' onChange={handleInputChange} value={security_symbol} />
          <label htmlFor='Security Name'>Security Name</label>
          <input type="text" id="security_name" placeholder='Enter Security Name ...' onChange={handleInputChange} value={security_name} />
          <label htmlFor='Industry'>Industry</label>
          <input type="text" id="industry" placeholder='Enter Industry ...' onChange={handleInputChange} value={industry} />
          <label htmlFor='Equity Cap'>Equity Cap</label>
          <input type="text" id="equity_cap" placeholder='Enter Equity ...' onChange={handleInputChange} value={equity_cap} />
          <label htmlFor='Free Float'>Free Float</label>
          <input type="text" id="free_float" placeholder='Enter Free Float Market Cap ...' onChange={handleInputChange} value={free_float} />
          <label htmlFor='Weightage'>Weightage</label>
          <input type="text" id="weightage" placeholder='Enter Weightage ...' onChange={handleInputChange} value={weightage} />
          <label htmlFor='Beta'>Beta</label>
          <input type="text" id="beta" placeholder='Enter Beta ...' onChange={handleInputChange} value={beta} />
          <label htmlFor='r2'>R2</label>
          <input type="text" id="r2" placeholder='Enter R2 ...' onChange={handleInputChange} value={r2} />
          <label htmlFor='Volatility'>Volatility</label>
          <input type="text" id="volatility" placeholder='Enter Volatility ...' onChange={handleInputChange} value={volatility} /> 
          <label htmlFor='Monthly Return'>Monthly Return</label>
          <input type="text" id="monthly_return" placeholder='Enter Monthly Return ...' onChange={handleInputChange} value={monthly_return} />
          <label htmlFor='Average Impact Cost'>Average Impact Cost</label>
          <input type="text" id="avg_impact_cost" placeholder='Enter Average Impact Cost ...' onChange={handleInputChange} value={avg_impact_cost} />
      </form>
    </div>
  );
};

export default AddEdit