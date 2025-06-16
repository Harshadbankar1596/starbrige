import React from 'react';
import './all.css';

const Actor = () => {
  // ✅ 10 actor objects
  const actors = [
    { id: 1, name: 'Shah Rukh Khan', img: 'https://via.placeholder.com/150', followers: '25M' },
    { id: 2, name: 'Deepika Padukone', img: 'https://via.placeholder.com/150', followers: '18M' },
    { id: 3, name: 'Ranveer Singh', img: 'https://via.placeholder.com/150', followers: '15M' },
    { id: 4, name: 'Alia Bhatt', img: 'https://via.placeholder.com/150', followers: '22M' },
    { id: 5, name: 'Salman Khan', img: 'https://via.placeholder.com/150', followers: '30M' },
    { id: 6, name: 'Katrina Kaif', img: 'https://via.placeholder.com/150', followers: '20M' },
    { id: 7, name: 'Hrithik Roshan', img: 'https://via.placeholder.com/150', followers: '17M' },
    { id: 8, name: 'Kriti Sanon', img: 'https://via.placeholder.com/150', followers: '10M' },
    { id: 9, name: 'Varun Dhawan', img: 'https://via.placeholder.com/150', followers: '14M' },
    { id: 10, name: 'Priyanka Chopra', img: 'https://via.placeholder.com/150', followers: '28M' },
  ];

  return (
    <div className="actor-container">
      {actors.map((actor) => (
        <div className="card" key={actor.id}>
          <img src={actor.img} alt={actor.name} />
          <h3>{actor.name}</h3>
          <p>Followers: {actor.followers}</p>
        </div>
      ))}
    </div>
  );
};

export default Actor;
