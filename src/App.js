import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Home, About, Services, Footer,File_an_issue,Contact } from "./components";

import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/file_an_issue" element={<File_an_issue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
