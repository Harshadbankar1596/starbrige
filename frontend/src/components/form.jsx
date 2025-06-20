import React, { useState } from 'react';
import './form.css';
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Always at the top to stop page reload

    console.log("Submitted Form Data:", formData);

    try {
      const response = await fetch("http://127.0.0.1:2323/formsubmit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          mail: formData.email, // Backend expects "mail"
          phone: formData.phone
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from server:", data);

      alert('Form submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
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
