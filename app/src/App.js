import React from "react";
import "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ManagePackages from "./managePackages.js";
import ManageUsers from "./manageUsers.js";
import ManageSettings from "./manageSettings.js";
import ManageDestination from "./manageDestination.js";
import Login from "./login.js";
import Register from "./register.js";
import Home from "./home.js";
import Profile from "./components/profile.js";
import ManageHosting from "./manageHosting.js";
import ManageTour from "./manageTours.js";
import ManageReservation from "./manageReservations.js";
import Hosting from "./forms/Hosting.js";
import PackageView from "./packageView.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/managesettings" element={<ManageSettings />} />
        <Route path="/manageusers" element={<ManageUsers />} />
        <Route path="/destination" element={<ManageDestination />} />
        <Route path="/hostings" element={<ManageHosting />} />
        <Route path="/editHostings" element={<Hosting />} />
        <Route path="/tours" element={<ManageTour />} />
        <Route path="/packages" element={<ManagePackages />} />
        <Route path="/reservations" element={<ManageReservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/package-view" element={<PackageView />} />
      </Routes>
    </BrowserRouter>
  );
}
