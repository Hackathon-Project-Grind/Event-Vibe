import React, { useState } from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import './Checkout.css';
import Popup from './Popup.jsx'; // Ensure Popup.jsx is in the same directory
import Header from '../Header/Header.jsx';
function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility
  const price = 500; // example price per ticket

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleCheckoutClick = () => {
    setIsPopupVisible(true); // Show the popup when checkout button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup when close button is clicked
  };

  return (
    <div>
      {Header}
    <div className='checkout-container'>
    
      <h1>Food Festival</h1>
      <div className='event-details'>
        <h2 className='date'><FaCalendar /> September 10, 2024</h2>
        <h2 className='timings'><FaClock /> 8:30PM-10:00PM</h2>
        <h2 className='location'><FaMapMarkerAlt /> Hyderabad</h2>
      </div>
      <div className='details-container'>
        <div className='pass-details'>
          <p className='pass-name'>General Pass</p>
          <p className='pass-price'><FaRupeeSign /> {price}</p>
          <div className='quantity-selector'>
            <label htmlFor='quantity-select'>Qty:</label>
            <select id='quantity-select' value={quantity} onChange={handleQuantityChange}>
              {[...Array(10).keys()].map(n => (
                <option key={n + 1} value={n + 1}>{n + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='checkout-area'>
          <h2>Ticket Qty: {quantity}</h2>
          <h2>Ticket Amount: <FaRupeeSign /> {price}</h2>
          <hr />
          <h2>Total Amount: <FaRupeeSign /> {price * quantity}</h2>
        </div>
      </div>
      <button className='Chekcout-btn' onClick={handleCheckoutClick}>Checkout</button>
      
      <Popup visible={isPopupVisible} onClose={handleClosePopup} /> {/* Popup component */}
    </div>
    </div>
  );
}

export default Checkout;
