import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Booknow.css';
import partyImage from "./assets/music.jpg";
import foodImage from "./assets/street food.jpg";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa';
import Header from '../Header/Header';
function Booknow() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/checkout');
  };

  return (
    <div className='container'>
      <div className="hero">
        <img src={foodImage} alt='party' />
      </div>
      <div className='event'>
        <h1>Food Festival</h1>
        <h4>Street Food Festival : A Heaven for foodies</h4>
        <p>
          Experience the tantalizing tastes and vibrant vibes of our Street Food Festival! Indulge in a culinary journey through a 
          kaleidoscope of flavors, from sizzling snacks to savory delights, all served up with a side of live music and entertainment. 
          Join us for an unforgettable celebration of street food culture that will tantalize your taste buds and ignite your senses.
        </p>
      </div>
      <div className="footer">
        <div className="venue">
          <h2><FaMapMarkerAlt/>Venue (HITEX Exhibition Center, Hitex Road, Izzathnagar, Kothaguda, Hyderabad, Telangana 500084)</h2>
          <div className="information">
            <h2><FaCalendarAlt/> September 10, 2024</h2>
            <h2><FaClock/> 8:30PM-10:00PM</h2>
            <h2><FaRupeeSign/> 500</h2>
          </div>
          <br />
          <button className='Book' type='button' onClick={handleBookClick}>Book</button>
        </div>
      </div>
    </div>
    
  );
}

export default Booknow;
