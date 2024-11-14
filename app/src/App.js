import React from "react";
import "react-router-dom";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import ManagerView from "./components/ManagerView";
import TripFilter from "./components/TripFilter";
import Footer from "./components/footer"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerView />} />
        <Route path="/teste" element={<TripFilter/>} />
        <Route path="/teste2" element={<Footer/>} />

      </Routes>
    </BrowserRouter>
  );
}
