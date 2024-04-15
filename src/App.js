import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/image1.png" className="logo" alt="logo" />
        <img src="/image3.png" className="backdrop" alt="backdrop" />
        <h1>Synkerr.</h1>
        <div className='three-on-top'>
        <h3>Our Aim</h3>
        <h3>Team</h3>
        <h3 className='lastOne '>What we do</h3>
        <div className="contact">
          <img src="/image2.png"  alt="contact us" />
          <p className="contact-text">Contact Us</p>
        </div>
        
        </div>
        
      </header>
      <body className='Body'>
        <div className='bodyI'>
          <img src="/image4.png" className="bodyI1" alt="image4" />
          <p>Exploit the power of</p>
          <img src="/image5.png" className="bodyI2" alt="image5" />
        </div>
        <p>Purposful Connections</p>
      </body>
    </div>
  );
}

export default App;