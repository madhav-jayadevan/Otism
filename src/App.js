import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";

import Contact from "./Pages/Contact";
import Teen from "./Pages/Teen";
import Adult from "./Pages/Adult";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";



function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Nav />
     
      {/* <Home/>
      <About />
      <Contact/> */}
      <Routes>
        
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/teen" element={<Teen />}></Route>
        <Route path="/adult" element={<Adult />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
