import React from 'react'
import "./App.css";
import Login from "./components/Login/Login";
import HomePage from './components/MainBody/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
