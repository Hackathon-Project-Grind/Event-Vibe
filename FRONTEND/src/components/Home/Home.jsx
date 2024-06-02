import React from "react";
import "./Home.css";
import musicImage from "./assets/music.jpg";
import foodImage from "./assets/street food.jpg"
import artImage from "./assets/Art.jpg";
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="HomePage">
      <h1 className="Heading">Events,</h1>
      <p className="SubHead">Upcoming Events</p>
      <br/>
      <div className="card">
        <img src={musicImage} alt="Event Poster" className="card-img"/>
        <div className="card-content">
          <h2 className="card-title">Music Concert</h2>
          <div className="card-info">
            <p className="card-category">Music</p>
            <p className="card-date"><FaCalendarAlt /> July 15, 2024</p>
          </div>
          <div className="card-footer">
            <p className="card-location"><FaMapMarkerAlt /> New York, NY</p>
            <Link to="/booknow">
              <button className="view-more-btn">View Details / Book</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={artImage} alt="Event Poster" className="card-img"/>
        <div className="card-content">
          <h2 className="card-title">Art Exhibition</h2>
          <div className="card-info">
            <p className="card-category">Art</p>
            <p className="card-date"><FaCalendarAlt /> August 20, 2024</p>
          </div>
          <div className="card-footer">
            <p className="card-location"><FaMapMarkerAlt /> Los Angeles, CA</p>
            <Link to="/booknow">
              <button className="view-more-btn">View Details / Book</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={foodImage} alt="Event Poster" className="card-img"/>
        <div className="card-content">
          <h2 className="card-title">Food Festival</h2>
          <div className="card-info">
            <p className="card-category">Food</p>
            <p className="card-date"><FaCalendarAlt /> September 10, 2024</p>
          </div>
          <div className="card-footer">
            <p className="card-location"><FaMapMarkerAlt /> Hyderabad</p>
            <Link to="/booknow">
              <button className="view-more-btn">View Details / Book</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
