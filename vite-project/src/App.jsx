import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import Login from "./Page/Login/Login";
import Home from './Page/Home/Home';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import User from './Page/User/User';
import UserDetail from './Page/UserDetail/UserDetail';
import AuthContext from './Context/auth.context';
import Logout from './Page/Logout/Logout';

function App() {
  const [auth, setAuth] = useState(null);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{
        auth: auth,
        setAuth: setAuth
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/User" element={<User />} />
          <Route path="/User/:userId" element={<UserDetail />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
