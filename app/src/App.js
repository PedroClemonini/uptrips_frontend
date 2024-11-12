import React from "react";
import "react-router-dom";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import ManagerView from "./components/ManagerView";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerView />} />
      </Routes>
    </BrowserRouter>
  );
}
