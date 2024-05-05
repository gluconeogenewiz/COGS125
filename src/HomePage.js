import React from 'react';
import './HomePage.css';  // Ensure you have a corresponding CSS file for styles
import albertImage from './Albert-1.png'; // Make sure the path is correct relative to this file

function HomePage() {
  return (
    <div className="home">
      <section className="home-section">
        <h2>Welcome to My Portfolio</h2>
        <img  src={albertImage} alt="Photo of Albert" />
        <p>Hello! Thanks for visiting my profolio. My name is Albert Nguyen, I currently pursuing a B.S. in Human Biology with a Minor in Computer Science.</p>
      </section>

      <section className="home-section">
        <h2>About My Work</h2>
        <img src="/path-to-another-image.jpg" alt="Description of Image" />
        <p>To be added </p>
      </section>

      <section className="home-section">
        <h2>Contact Info</h2>
        <img src="/path-to-another-image.jpg" alt="Contact" />
        <p> To be added</p>
      </section>
    </div>
  );
}

export default HomePage;
