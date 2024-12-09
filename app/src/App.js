import React from "react";
import "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ManagePackages from "./managePackages.js";
import ManageUsers from "./manageUsers.js";
import ManageSettings from "./manageSettings.js";
import Login from "./login.js";
import Register from "./register.js";
import Home from "./home.js";
import Profile from "./components/profile.js"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/managepackages" element={<ManagePackages />} />
        <Route path="/managesettings" element={<ManageSettings />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
