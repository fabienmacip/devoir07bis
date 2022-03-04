import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "components/UI/Layout";

import Home from "components/Home";
import About from "components/About";
import Tarif from "components/Tarif";
import Contact from "components/Contact";
import Galerie from "components/Galerie";

export default function App() {
  return (  
   <Router>
      <Layout>
        <Routes>
          <Route path="/galerie" element={<Galerie />}></Route>
          <Route path="/tarif" element={<Tarif />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
   </Router>
    );
  }
  
  
  
