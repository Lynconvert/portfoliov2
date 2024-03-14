import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Skills from "./component/Skills.js";
import Contact from "./component/Contact.js";
import Comment from "./component/Comment.js";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Comment />
    </div>
  );
}

export default App;
