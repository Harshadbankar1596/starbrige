import React, { useEffect, useRef } from 'react';
import './all.css';
import { actors, anchors , influencers } from './peopal'; // fix import
import { Link, Links } from 'react-router-dom';

const Actor = (props) => {
  
  const scrollRef = useRef(null);

  useEffect(() => {

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  const data = props.obj === "actors" ? actors : props.obj === "anchors" ? anchors : props.obj == "influencers" ? influencers : [];


  return (
    <div ref={scrollRef} className="actor-container">
      {data.map((actor) => (
        <Link to={`/${props.obj}/${actor.name}`} className="card" key={actor.id}>
          <img src={actor.img} alt={actor.name} />
          <h3>{actor.name}</h3>
          <p>Followers: {actor.follwers}</p>
        </Link>
      ))}
    </div>
  );
};

export default Actor;
