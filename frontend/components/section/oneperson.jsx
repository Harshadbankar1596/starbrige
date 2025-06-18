import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { actors, anchors, influencers } from './peopal';
import './oneperson.css';

const Oneperson = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const { type, name } = useParams();
  const decodedName = decodeURIComponent(name).toLowerCase().trim();

  let list = [];
  if (type === 'actors') list = actors;
  else if (type === 'anchors') list = anchors;
  else if (type === 'influencers') list = influencers;

  const person = list.find(
    (p) => p.name.toLowerCase().trim() === decodedName
  );

  if (!person) return <h2 className="not-found">No person found</h2>;

  const displayValue = (value) => value || 'Not available';

  return (
    <div ref={scrollRef} className="person-detail-container">
      <div className="person-card animate-slide-in">
        <div className="image-section">
          <img
            src={person.img || 'https://via.placeholder.com/150'}
            alt={person.name}
          />
        </div>
        <div className="info-section">
          <h2 className="person-name">{person.name}</h2>
          <p className="person-followers">
            <strong>Followers:</strong> {displayValue(person.follwers)}
          </p>
          <p className="person-profession">
            <strong>Profession:</strong> {displayValue(person.profession)}
          </p>
          <p className="person-experience">
            <strong>Experience:</strong> {displayValue(person.experience)}
          </p>
          <p className="person-languages">
            <strong>Languages:</strong> {displayValue(person.languages)}
          </p>
          <p className="person-specialization">
            <strong>Specialization:</strong> {displayValue(person.specialization)}
          </p>

          {/* Book Me Button */}
          <Link to={"/form"} className="book-btn">
            Book Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Oneperson;
