import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './form.css';

const Form = () => {
  const location = useLocation();
  const { type, name: talentName } = location.state || {};

  const [formData, setFormData] = useState({
    yourname: '',
    city: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { yourname, city, phone } = formData;

    const message = `Celebrity Booking Request 📩
%0A Talent name : ${talentName || "N/A"}
%0A Category : ${type || "N/A"}
%0A Name : ${yourname}
%0A City : ${city}
%0A Phone : ${phone}`;

    const whatsappNumber = '7028445707';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Book Talent</h2>

        <input
          type="text"
          name="yourname"
          placeholder="Enter your full name"
          required
          value={formData.yourname}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="celebrity name"
          value={talentName || ''}
          readOnly
        />

        <input
          type="text"
          placeholder="celebrity Category"
          value={type || ''}
          readOnly
        />

        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          required
          value={formData.city}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          required
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit" className="animated-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
