import React from 'react';
import { useEffect, useRef } from 'react';
import './all.css';

const Actor = (props) => {



  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // ✅ 10 actor objects
  const actors = [
    { id: 1, name: 'Shah Rukh Khan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdREudw3yc7e-0W5UgJO3EVnQfFgRJQcx7Q&s', followers: '25M' },
    { id: 2, name: 'Deepika Padukone', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3nGKT5vrgH6P9kDoa0QkTFpb-WOqgUS-cw&s', followers: '18M' },
    { id: 3, name: 'Ranveer Singh', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREbBzgmOG8xZHobWD46QzlvRCIMA2B7Lt5A&s', followers: '15M' },
    { id: 4, name: 'Alia Bhatt', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xhCc9IX-xLTKL7LbOREeeuJK8RBr5thtIg&s', followers: '22M' },
    { id: 5, name: 'Salman Khan', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Salman_Khan_in_2023_%281%29_%28cropped%29.jpg/250px-Salman_Khan_in_2023_%281%29_%28cropped%29.jpg', followers: '30M' },
    { id: 6, name: 'Katrina Kaif', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Katrina_Kaif_promoting_Sooryavanshi_on_KBC.jpg/250px-Katrina_Kaif_promoting_Sooryavanshi_on_KBC.jpg', followers: '20M' },
    { id: 7, name: 'Hrithik Roshan', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hrithik_at_Rado_launch.jpg/250px-Hrithik_at_Rado_launch.jpg', followers: '17M' },
    { id: 8, name: 'Kriti Sanon', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhK7839YaECYmmO70JDRCENU9z5RZGK1PjQ&s', followers: '10M' },
    { id: 9, name: 'Varun Dhawan', img: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Varun_Dhawan_promoting_Badrinath_Ki_Dulhania.jpg ', followers: '14M' },
    { id: 10, name: 'Priyanka Chopra', img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Priyanka_Chopra_at_Bulgary_launch%2C_2024_%28cropped%29.jpg', followers: '28M' },
  ];
  const data = props.obj === "actors" ? actors : [];
  return (
    <div ref={scrollRef} className="actor-container">
      {data.map((actor) => (
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
