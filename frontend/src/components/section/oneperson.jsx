import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { actors, anchors, influencers , writers , reelshoots} from './peopal';
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
  if (type === 'actor') list = actors;
  else if (type === 'anchor') list = anchors;
  else if (type === 'influencer') list = influencers;
  else if (type === 'writer') list = writers;
  else if (type === 'reelshoot') list = reelshoots;

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




// import React, { useEffect, useRef, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './oneperson.css';

// const apiUrl = import.meta.env.VITE_API_URL;

// const Oneperson = () => {
//   const scrollRef = useRef(null);
//   const { type, name } = useParams();
//   const decodedName = decodeURIComponent(name).toLowerCase().trim();

//   const [person, setPerson] = useState(null);
//   const [error, setError] = useState(null);

//   // Scroll to top on load
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   // Fetch person data from backend
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(`${apiUrl}/${type}`);
//         const json = await res.json();

//         if (!res.ok || json.success === false) {
//           setError(json.message || "❌ Server error");
//           return;
//         }

//         const list = Array.isArray(json) ? json : json.data;
//         const found = list.find(
//           (p) => p.name.toLowerCase().trim() === decodedName
//         );

//         if (!found) {
//           setError("No person found");
//         } else {
//           setPerson(found);
//         }
//       } catch (err) {
//         console.error("❌ Error fetching:", err);
//         setError("⚠️ Network error");
//       }
//     }

//     fetchData();
//   }, [type, decodedName]);

//   if (error) return <h2 className="not-found">{error}</h2>;
//   if (!person) return <h2 className="loading">Loading...</h2>;

//   return (
//     <div ref={scrollRef} className="person-detail-container">
//       <div className="person-card animate-slide-in">
//         <div className="image-section">
//           <img
//             src={person.img || 'https://via.placeholder.com/150'}
//             alt={person.name}
//           />
//         </div>
//         <div className="info-section">
//           <h2 className="person-name">{person.name}</h2>

//           {person.followers && (
//             <p className="person-followers">
//               <strong>Followers:</strong> {person.followers}
//             </p>
//           )}

//           {person.profession && (
//             <p className="person-profession">
//               <strong>Profession:</strong> {person.profession}
//             </p>
//           )}

//           {person.experience && (
//             <p className="person-experience">
//               <strong>Experience:</strong> {person.experience}
//             </p>
//           )}

//           {person.languages && (
//             <p className="person-languages">
//               <strong>Languages:</strong> {person.languages}
//             </p>
//           )}

//           {person.specialization && (
//             <p className="person-specialization">
//               <strong>Specialization:</strong> {person.specialization}
//             </p>
//           )}

//           <Link to="/form" className="book-btn">
//             Book Me
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Oneperson;
