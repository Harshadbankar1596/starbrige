import React, { useState , useRef , useEffect} from 'react';
import './register.css'; // styling aapke paas already hai

const RegisterForm = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },[])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, city, category } = formData;

    const message = `📋 New Talent Registration:
%0A👤 Name: ${name}
%0A📞 Phone: ${phone}
%0A🏙️ City: ${city}
%0A🎭 Category: ${category}`;

    const whatsappNumber = "919404823867"; // ← change to your number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappURL, "_blank");

    // Optional: Reset form
    setFormData({
      name: '',
      phone: '',
      city: '',
      category: '',
    });
  };

  return (
    <div ref={scrollRef} className="register-container">
      <form onSubmit={handleSubmit} className="register-box">
        <h2>Talent Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          required
          value={formData.city}
          onChange={handleChange}
        />

        <select
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">-- Select Category --</option>
          <option value="Actor">Actor</option>
          <option value="Anchor">Anchor</option>
          <option value="Influencer">Influencer</option>
          <option value="Writer">Writer</option>
          <option value="Makeup Artist">Makeup Artist</option>
          <option value="Mehendi Artist">Mehendi Artist</option>
          <option value="Reel Shoot">Reel Shoot</option>
        </select>

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default RegisterForm;
