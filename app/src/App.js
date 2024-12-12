import React from "react";
import "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ManagerView from "./managerView";
import TripFilter from "./components/TripFilter";
import Footer from "./components/footer"
import Login from "./login";
import Register from "./register";
import ManagePackages from "./managePackages.js";
import ManageUsers from "./manageUsers.js";
import ManageSettings from "./manageSettings.js";
import ManageDestination from "./manageDestination.js";
import Home from "./home.js";
import Profile from "./components/profile.js"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerView />} />
        <Route path="/filtro" element={<TripFilter/>} />
        <Route path="/footer" element={<Footer/>} />

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
          <Route path="/managedestination" element={<ManageDestination />} />
        <Route path="/managepackages" element={<ManagePackages />} />
        <Route path="/managesettings" element={<ManageSettings />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
