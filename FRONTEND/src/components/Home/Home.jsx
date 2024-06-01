import React from "react";
import "./Home.css";
import musicImage from "./assets/music.jpg";
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';


function Home() {
  return (
    <div className="card">
      <img src={musicImage} alt="Event Poster" className="card-img"/>
      <div className="card-content">
        <h2 className="card-title">Event Name</h2>
        <div className="card-info">
          <p className="card-category">Category</p>
          <p className="card-date"><FaCalendarAlt /> Date</p>
        </div>
        <div className="card-footer">
          <p className="card-location"><FaMapMarkerAlt /> Location</p>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
