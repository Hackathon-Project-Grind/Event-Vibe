import React, { useState } from "react";
import './ListEvents.css';

function ListEvents() {
  const [image, setImage] = useState(null);
  const [eventName, setEventName] = useState("");
  const [tagline, setTagline] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleImageChoose = () => {
    document.getElementById("image").click();
  };

  const handleImageUpload = (files) => {
    if (!files) {
      files = document.getElementById("image").files;
    }
  
    console.log("Selected files:", files);
    
    setImage(URL.createObjectURL(files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted"); // Add this line

    // Perform validation
    if (!eventName || !tagline || !date || !startTime || !endTime || !city || !address || !description || !price) {
      alert("Please fill in all fields");
      console.log("Validation failed"); // Add this line
      return;
    }

    // Proceed with form submission
    const formData = new FormData(event.target);
    const eventData = {
      eventName: eventName,
      tagline: tagline,
      date: date,
      startTime: startTime,
      endTime: endTime,
      city: city,
      address: address,
      image: image,
      description: description,
      price: price
    };

    try {
      const response = await fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      console.log("Server response:", response); // Add this line
      const data = await response.json();
      console.log(data); // Log the response from the server
      alert("Event registered successfully");
    } catch (error) {
      console.error('Error creating event:', error);
      alert("Failed to register event");
    }
  };

  return (
    <div className="page-container">
      <h2 className="subheading">List your event in EventVibe</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input type="text" id="eventName" name="eventName" placeholder="Event Name (Display)" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        <input type="text" id="tagline" name="tagline" placeholder="Tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} required/>
        <input type="date" id="date" name="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <div className="time">
          <label>
            Start
            <input type="time" id="starttime" name="starttime" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
          </label>
          <label>
            End
            <input type="time" id="endtime" name="endtime" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
          </label>
        </div>
        <input type="text" id="city" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
        <input type="text" id="address" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <label htmlFor="coverphoto">Upload Event poster</label>
        <div className="image-container">
          <input type="file" id="image" name="image" accept="image/*" onChange={(e) => handleImageUpload(e.target.files)} />
          {image && <img src={image} alt="Selected" style={{ width: "150px", height: "150px", objectFit: "cover" }} />}
        </div>
        <textarea id="description" name="description" placeholder="100 word description about the event" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
        <input type="number" id="price" name="price" placeholder="Amount" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ListEvents;
