import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './form.css';

const Form = () => {
  const location = useLocation();
  const { type, name: talentName } = location.state || {};

  const [formData, setFormData] = useState({
    yourname: '',
    city: '',
    phone: '',
    date: '',
    manualTalentName: '', // for manual entry if talentName is missing
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { yourname, city, phone, date, manualTalentName } = formData;
    const actualTalentName = talentName || manualTalentName || 'N/A';

    const message = `Celebrity Booking Request 📩
%0A Talent name : ${actualTalentName}
%0A Category : ${type || 'N/A'}
%0A Name : ${yourname}
%0A City : ${city}
%0A Phone : ${phone}
%0A Booking Date : ${date || 'Not provided'}`;

    const whatsappNumber = '919404823867';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2 className="form-title">📅 Book Talent</h2>

        <input
          type="text"
          name="yourname"
          placeholder="Your Full Name"
          required
          value={formData.yourname}
          onChange={handleChange}
          className="form-input"
        />

        {talentName ? (
          <input
            type="text"
            value={talentName}
            readOnly
            className="form-input readonly"
          />
        ) : (
          <input
            type="text"
            name="manualTalentName"
            placeholder="Enter Celebrity Name"
            required
            value={formData.manualTalentName}
            onChange={handleChange}
            className="form-input"
          />
        )}

        <input
          type="text"
          value={type || ''}
          readOnly
          className="form-input readonly"
        />

        <input
          type="text"
          name="city"
          placeholder="Your City"
          required
          value={formData.city}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
        />

        <label className="form-label">Booking Date:</label>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
