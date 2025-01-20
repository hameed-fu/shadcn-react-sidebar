import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./App/Dashboard";
import Blank from "./App/Blank";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard"); // Initial page is set to "dashboard"

  return (
    <BrowserRouter>
     
      {/* Conditionally set the page */}
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
