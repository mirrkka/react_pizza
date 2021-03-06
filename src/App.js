import './App.css';
import './scss/app.scss'
import Header from './components/Header';
import Home from './pages/Home'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart'
import {
  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const searchContex = React.createContext('')

function App() {

 

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
     <searchContex.Provider value={{searchValue, setSearchValue }}>
     <Header/>
      <div className="content">
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />}/>
       </Routes>
        
      </div>
      </searchContex.Provider>
    </div>
  );
}

export default App;
