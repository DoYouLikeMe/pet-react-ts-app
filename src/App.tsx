import React from "react";
import "@/scss/main.scss";
import {Header} from "@/components/Header/Header";

import {Main} from "@/pages/Main";
import {OurPets} from "@/pages/OurPets";
import {Help} from "@/pages/Help";
import {Contacts} from "@/pages/Contacts";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/our-pets" element={<OurPets />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
