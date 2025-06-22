import React, { useEffect, useRef, useState } from 'react';
import './all.css';
import { Link } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;
console.log("API Base URL:", apiUrl);

const Actor = (props) => {
  const scrollRef = useRef(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    async function fetchData() {
      try {
        const res = await fetch(`${apiUrl}/${props.obj}`);
        const json = await res.json();

        if (!res.ok || json.success === false) {
          setError(json.message || "⚠️ Server error");
          setData([]);
        } else {
          setData(Array.isArray(json) ? json : json.data || []);
        }

        console.log("✅ Fetched:", json);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
        setError("Network error. Please try again.");
      }
    }

    fetchData();
  }, [props.obj]);

  return (
    <div ref={scrollRef} className="actor-container">
      {error && <p className="error-msg">{error}</p>}
      {data.length === 0 && !error && <p className="loading-msg">Loading...</p>}
      {data.map((actor, index) => (
        <Link to={`/${props.obj}/${actor.name}`} className="card" key={actor._id || index}>
          <img src={actor.img} alt={actor.name} onError={(e) => e.target.src = "/fallback.jpg"} />
          <h3>{actor.name}</h3>
          {actor.followers && <p>Followers: {actor.followers}</p>}
        </Link>
      ))}
    </div>
  );
};

export default Actor;
