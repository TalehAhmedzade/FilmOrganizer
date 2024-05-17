import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import './reset.css';
import './common.css';
import { useDispatch, useSelector } from 'react-redux';

function App () {
  
  const apiKey =  `http://www.omdbapi.com/?i=tt3896198&apikey=2fd1f3f9`;
  // ikinci defe elave etmek olmasin filmi
    return (
      <div className="app">
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/:id" element={<ListPage />} />
      </Routes>
      </div>
    );
  
  }

export default App;
