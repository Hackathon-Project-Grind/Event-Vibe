import React, { useState } from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import './Checkout.css';

function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const price = 500; // example price per ticket

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className='checkout-container'>
      <h1>Event Name</h1>
      <div className='event-details'>
        <h2 className='date'><FaCalendar /> Date</h2>
        <h2 className='timings'><FaClock /> Timings</h2>
        <h2 className='location'><FaMapMarkerAlt /> Location</h2>
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
      <button className='Chekcout-btn'>Checkout</button>
    </div>
  );
}

export default Checkout;