// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CorporateBankAccount from "./pages/corporate-bank-account";
import PersonalBankAccount from "./pages/personal-bank-account";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/corporate-bank-account" element={<CorporateBankAccount />} />
        <Route path="/personal-bank-account" element={<PersonalBankAccount />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
