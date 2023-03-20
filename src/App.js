import Home from './components/Home';
import Navbar from './components/Navbar';
import "./styles.css"
import Downloads from './components/Downloads';
import Flipbook from './components/Flipbook';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Popup from './components/Popup';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarousel from './components/BootstrapCarousel';

function App() {
  
  return (

    <div className="App">
      <Navbar />
      <Home />
      {/* <BootstrapCarousel /> */}
      <Flipbook />
      <Downloads />
      {/* <Contactus /> */}
      {/* <Popup trigger={buttonPopup}> <h3>MY POPUP</h3> </Popup> */}
      <Footer />
      <Popup />
      

      </div>
  );
}

export default App;
