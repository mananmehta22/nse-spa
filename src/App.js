import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEdit from './pages/AddEdit';
import AddEdit_08 from './pages/AddEdit_08';
import AddEdit_09 from './pages/AddEdit_09';
import AddEdit_10 from './pages/AddEdit_10';
import AddEdit_11 from './pages/AddEdit_11';
import AddEdit_12 from './pages/AddEdit_12';
import AddEdit_13 from './pages/AddEdit_13';
import AddEdit_14 from './pages/AddEdit_14';
import AddEdit_15 from './pages/AddEdit_15';
import AddEdit_16 from './pages/AddEdit_16';
import AddEdit_17 from './pages/AddEdit_17';
import AddEdit_18 from './pages/AddEdit_18';
import AddEdit_19 from './pages/AddEdit_19';
import AddEdit_20 from './pages/AddEdit_20';
import AddEdit_21 from './pages/AddEdit_21';
import Home from './pages/Home';
import View from './pages/View';
import View_08 from './pages/View_08';
import View_09 from './pages/View_09';
import View_10 from './pages/View_10';
import View_11 from './pages/View_11';
import View_12 from './pages/View_12';
import View_13 from './pages/View_13';
import View_14 from './pages/View_14';
import View_15 from './pages/View_15';
import View_16 from './pages/View_16';
import View_17 from './pages/View_17';
import View_18 from './pages/View_18';
import View_19 from './pages/View_19';
import View_20 from './pages/View_20';
import View_21 from './pages/View_21';
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
        <Route path='/update_22/:sr_no' element={<AddEdit/>} />
        <Route path='/update_21/:sr_no' element={<AddEdit_21/>} />
        <Route path='/update_20/:sr_no' element={<AddEdit_20/>} />
        <Route path='/update_19/:sr_no' element={<AddEdit_19/>} />
        <Route path='/update_18/:sr_no' element={<AddEdit_18/>} />
        <Route path='/update_17/:sr_no' element={<AddEdit_17/>} />
        <Route path='/update_16/:sr_no' element={<AddEdit_16/>} />
        <Route path='/update_15/:sr_no' element={<AddEdit_15/>} />
        <Route path='/update_14/:sr_no' element={<AddEdit_14/>} />
        <Route path='/update_13/:sr_no' element={<AddEdit_13/>} />
        <Route path='/update_12/:sr_no' element={<AddEdit_12/>} />
        <Route path='/update_11/:sr_no' element={<AddEdit_11/>} />
        <Route path='/update_10/:sr_no' element={<AddEdit_10/>} />
        <Route path='/update_09/:sr_no' element={<AddEdit_09/>} />
        <Route path='/update_08/:sr_no' element={<AddEdit_08/>} />
        <Route path='/view_22/:sr_no' element={<View/>} />
        <Route path='/view_21/:sr_no' element={<View_21/>} />
        <Route path='/view_20/:sr_no' element={<View_20/>} />
        <Route path='/view_19/:sr_no' element={<View_19/>} />
        <Route path='/view_18/:sr_no' element={<View_18/>} />
        <Route path='/view_17/:sr_no' element={<View_17/>} />
        <Route path='/view_16/:sr_no' element={<View_16/>} />
        <Route path='/view_15/:sr_no' element={<View_15/>} />
        <Route path='/view_14/:sr_no' element={<View_14/>} />
        <Route path='/view_13/:sr_no' element={<View_13/>} />
        <Route path='/view_12/:sr_no' element={<View_12/>} />
        <Route path='/view_11/:sr_no' element={<View_11/>} />
        <Route path='/view_10/:sr_no' element={<View_10/>} />
        <Route path='/view_09/:sr_no' element={<View_09/>} />
        <Route path='/view_08/:sr_no' element={<View_08/>} />
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
