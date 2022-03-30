import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import Jan_08 from './pages/Jan_08';
import Jan_09 from './pages/Jan_09';
import Jan_10 from './pages/Jan_10'
import Jan_11 from './pages/Jan_11'
import Jan_12 from './pages/Jan_12'
import Jan_13 from './pages/Jan_13'
import Jan_14 from './pages/Jan_14'
import Jan_15 from './pages/Jan_15'
import Jan_16 from './pages/Jan_16'
import Jan_17 from './pages/Jan_17'
import Jan_18 from './pages/Jan_18'
import Jan_19 from './pages/Jan_19'
import Jan_20 from './pages/Jan_20'
import Jan_21 from './pages/Jan_21'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header.js';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header />
      <ToastContainer position='top-center' />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/update' element={<AddEdit/>} />
        <Route path='/view/:sr_no' element={<View/>} />
        <Route path='/jan_08' element={<Jan_08/>} />
        <Route path='/jan_09' element={<Jan_09/>} />
        <Route path='/jan_10' element={<Jan_10/>} />
        <Route path='/jan_11' element={<Jan_11/>} />
        <Route path='/jan_12' element={<Jan_12/>} />
        <Route path='/jan_13' element={<Jan_13/>} />
        <Route path='/jan_14' element={<Jan_14/>} />
        <Route path='/jan_15' element={<Jan_15/>} />
        <Route path='/jan_16' element={<Jan_16/>} />
        <Route path='/jan_17' element={<Jan_17/>} />
        <Route path='/jan_18' element={<Jan_18/>} />
        <Route path='/jan_19' element={<Jan_19/>} />
        <Route path='/jan_20' element={<Jan_20/>} />
        <Route path='/jan_21' element={<Jan_21/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
