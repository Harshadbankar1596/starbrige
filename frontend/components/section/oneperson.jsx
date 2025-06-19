import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { actors, anchors, influencers ,writers} from './peopal';
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
  else if (type === 'writers') list = writers;

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

          {person.follwers && (
            <p className="person-followers">
              <strong>Followers:</strong> {person.follwers}
            </p>
          )}

          {person.profession && (
            <p className="person-profession">
              <strong>Profession:</strong> {person.profession}
            </p>
          )}

          {person.experience && (
            <p className="person-experience">
              <strong>Experience:</strong> {person.experience}
            </p>
          )}

          {person.languages && (
            <p className="person-languages">
              <strong>Languages:</strong> {person.languages}
            </p>
          )}

          {person.specialization && (
            <p className="person-specialization">
              <strong>Specialization:</strong> {person.specialization}
            </p>
          )}

          <Link to="/form" className="book-btn">
            Book Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Oneperson;
