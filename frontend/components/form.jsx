import React, { useState } from 'react';
import './form.css';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!')
     navigate('/');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Contact Us</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.email}
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
