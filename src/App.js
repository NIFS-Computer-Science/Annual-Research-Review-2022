import Home from './components/Home';
import Navbar from './components/Navbar';
import "./styles.css"
import Downloads from './components/Downloads';
import Flipbook from './components/Flipbook';
import Contactus from './components/Contactus';
import React from "react";

function App() {
  
  return (

    <div className="App">
      <Navbar />
      <Home />
      <Flipbook />
      <Downloads />
      <Contactus />

      </div>
  );
}

export default App;
