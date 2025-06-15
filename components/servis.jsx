import React, { useState } from 'react';
import './servis.css';

const data = {
  Anchors: [
    'Namrata Shirsath', 'Neha Patil', 'Kalyani Sawale', 'Nisha Kuchekar',
    'Pooja Khambalkar', 'Shradha Kulkarni', 'Snehal Nimbalkar', 'Vidula Baviskar'
  ],
  Actors: ['Official Aishwarya - Aishwarya Jadhav (350k)'],
  Influencers: [
    'Namrata Shirsath', 'Sakshi Nikam', 'Rushikesh Gadekar', 'Arohi Choudhari',
    'Ganesh Fartade', 'Champ Darshuu - Sudarshan Shivkumar Nalegaonkar',
    'Pooja Khambalkar', 'Vidula Baviskar', 'Shradha Kulkarni'
  ],
  "Mehandi Artists": ['Maya Mathapati', 'NIKITA JADHAV Mehandi Artist'],
  "Makeup Artists": [
    'Minal Makeup Studio - Mean Mute Patil',
    'Sakhi n Sakha Makeup Studio',
    'Namrta Makeup Studio'
  ]
};

const Servis = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <section className="service-section">
      <h2 className="title">Sections We Provide</h2>
      <div className="service-grid">
        {Object.keys(data).map((category) => (
          <div key={category} className="service-box" onClick={() => handleClick(category)}>
            <h3>{category}</h3>
            <p>Click to see more details</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="details-panel">
          <h3>{selectedCategory}</h3>
          <ul>
            {data[selectedCategory].map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Servis;