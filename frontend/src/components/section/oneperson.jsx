import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './oneperson.css';

const apiUrl = import.meta.env.VITE_API_URL;

const Oneperson = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { type, name } = useParams();
  const decodedName = decodeURIComponent(name).toLowerCase().trim();

  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [person]);

  // Fetch person data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${apiUrl}/${type}`);
        const json = await res.json();

        if (!res.ok || json.success === false) {
          setError(json.message || "❌ Server error");
          return;
        }

        const list = Array.isArray(json) ? json : json.data;
        const found = list.find(
          (p) => p.name.toLowerCase().trim() === decodedName
        );

        if (!found) {
          setError("❌ No person found");
        } else {
          setPerson(found);
        }
      } catch (err) {
        console.error("❌ Error fetching:", err);
        setError("⚠️ Network error");
      }
    }

    fetchData();
  }, [type, decodedName]);

  const handleBook = () => {
    navigate('/form', {
      state: {
        type,
        name: person?.name || ''
      }
    });
  };

  if (error) return <h2 className="not-found">{error}</h2>;
  if (!person) return <h2 className="loading">Loading...</h2>;

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

          {person.followers && (
            <p className="person-followers">
              <strong>Followers:</strong> {person.followers}
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

          <button onClick={handleBook} className="book-btn">
            Book Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oneperson;
