import React from 'react';
import { IoTicket } from 'react-icons/io5';
import { GoCheckCircleFill } from "react-icons/go";
import './Popup.css';

const Popup = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="popup-overlay"
    >
      <div className="popup-content">
        <h1><GoCheckCircleFill size={22}/> Your ticket has been Confirmed.</h1>
        <p><IoTicket/> Ticket no: <span>#AEBOENR2VJAOTEO34O2D</span></p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default Popup;
