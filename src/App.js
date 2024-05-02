import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pixa from "./comps/Pixa";
import Navbar from "./comps/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pixa" element={<Pixa />} />
      </Routes>
    </Router>
  );
}

export default App;
