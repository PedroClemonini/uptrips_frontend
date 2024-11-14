import React from "react";
import "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ManagerView from "./components/ManagerView";
import TripFilter from "./components/TripFilter";
import Footer from "./components/footer"
import Login from "./login";
import Register from "./register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerView />} />
        <Route path="/filtro" element={<TripFilter/>} />
        <Route path="/footer" element={<Footer/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
