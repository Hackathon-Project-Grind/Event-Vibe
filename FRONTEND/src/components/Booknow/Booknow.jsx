// Booknow.jsx
import React from 'react';
import './Booknow.css';
import partyImage from "./assets/music.jpg";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa';


function Booknow() {
  return (
    <div className='container'>
      <div className="hero">
        <img src={partyImage} alt='party' />
      </div>
      <div className='event'>
        <h1>Event Name</h1>
        <h4>Tag Line</h4>
        <p>
          Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>
      </div>
      <div className="footer">
        <div className="venue">
          <h2><FaMapMarkerAlt/>Venue (Full Address)</h2>
          <div className="information">
            <h2><FaCalendarAlt/> Date</h2>
            <h2><FaClock/>Time</h2>
            <h2><FaRupeeSign/>Ticket Price</h2>
          </div>
          <br />
          <button className='Book' type='button'>Book</button>
        </div>
      </div>
    </div>
  );
}

export default Booknow;
