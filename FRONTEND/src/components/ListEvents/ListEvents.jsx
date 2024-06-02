import React, { useState } from "react";
import './ListEvents.css';

function ListEvents() {
  const [image, setImage] = useState(null);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>EventVibe <button className="goback">Go back</button></h1>
      </header>
      <h2 className="subheading">List your event in EventVibe</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input type="text" id="eventName" name="eventName" placeholder="Event Name (Display)" required />
        <input type="text" id="tagline" name="tagline" placeholder="Tagline" required/>
        <input type="date" id="date" name="date" placeholder="Date" required />
        <div className="time">
          <label>
            Start
            <input type="time" id="starttime" name="starttime" required />
          </label>
          <label>
            End
            <input type="time" id="endtime" name="endtime" required />
          </label>
        </div>
        <input type="text" id="city" name="city" placeholder="City" required />
        <input type="text" id="address" name="address" placeholder="Address" required />
        <label htmlFor="coverphoto">Upload Event poster</label>
        <div className="image-container">
            
          <input type="file" id="image" name="image" accept="image/*" onChange={(e) => handleImageUpload(e.target.files)} />
          
          {image && <img src={image} alt="Selected" style={{ width: "150px", height: "150px", objectFit: "cover" }} />}
        </div>
        <textarea id="description" name="description" placeholder="100 word description about the event" rows="4" />
        <input type="number" id="price" name="price" placeholder="Amount" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ListEvents;
