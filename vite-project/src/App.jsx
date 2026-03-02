import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import Login from "./Page/Login/Login";
import Home from './Page/Home/Home';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import User from './Page/User/User';
import UserDetail from './Page/UserDetail/UserDetail';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="/User/:userId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
