import React, { useEffect, useRef , useState} from 'react';
import './all.css';
import { actors, anchors , influencers , writers , reelshoots} from './peopal'; // fix import
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
console.log("API Base URL:", apiUrl);


const Actor = (props) => {
  const scrollRef = useRef(null);
  const [data , setdata] = useState([])
  
  
  useEffect(() => {

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  //  async function call() {
  //     try {
  //       const url = await fetch(`${apiUrl}/${props.obj}`)
  //       let json = await url.json()
  //       setdata(json)
  //       console.log("data" , json);
  //     } catch (error) {
  //       console.log("error in fetch data");
  //     }
      
  //   }
  // call()
  
    let os = props.obj === "actor" ? actors : props.obj === "anchor" ? anchors : props.obj == "influencer" ? influencers : props.obj == "writer" ? writers : props.obj == "reelshoot" ? reelshoots : []
    setdata(os)

  }, [props.obj]);




  return (
    <div ref={scrollRef} className="actor-container">
      {data.map((actor) => (
        <Link to={`/${props.obj}/${actor.name}`} className="card" key={actor.id}>
          <img src={actor.img} alt={actor.name} />
          <h3>{actor.name}</h3>
          {(actor.follwers) && <p>Followers: {actor.follwers}</p>}
        </Link>
      ))}
    </div>
  );
};

export default Actor;




// import React, { useEffect, useRef, useState } from 'react';
// import './all.css';
// import { Link } from 'react-router-dom';

// const apiUrl = import.meta.env.VITE_API_URL;
// console.log("API Base URL:", apiUrl);

// const Actor = (props) => {
//   const scrollRef = useRef(null);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
//     }

//     async function fetchData() {
//       try {
//         const res = await fetch(`${apiUrl}/${props.obj}`);
//         const json = await res.json();

//         if (!res.ok || json.success === false) {
//           setError(json.message || "⚠️ Server error");
//           setData([]);
//         } else {
//           setData(Array.isArray(json) ? json : json.data || []);
//         }

//         console.log("✅ Fetched:", json);
//       } catch (err) {
//         console.error("❌ Error fetching data:", err);
//         setError("Network error. Please try again.");
//       }
//     }

//     fetchData();
//   }, [props.obj]);

//   return (
//     <div ref={scrollRef} className="actor-container">
//       {error && <p className="error-msg">{error}</p>}
//       {data.length === 0 && !error && <p className="loading-msg">Loading...</p>}
//       {data.map((actor, index) => (
//         <Link to={`/${props.obj}/${actor.name}`} className="card" key={actor._id || index}>
//           <img src={actor.img} alt={actor.name} onError={(e) => e.target.src = "/fallback.jpg"} />
//           <h3>{actor.name}</h3>
//           {actor.followers && <p>Followers: {actor.followers}</p>}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Actor;
