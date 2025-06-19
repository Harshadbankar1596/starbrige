import React, { useEffect, useRef , useState} from 'react';
import './all.css';
import { actors, anchors , influencers , writers} from './peopal'; // fix import
import { Link } from 'react-router-dom';

const Actor = (props) => {
  const scrollRef = useRef(null);
  const [data , setdata] = useState([])
  
  
  useEffect(() => {

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  //  async function call() {
  //     try {
  //       const url = await fetch(`http://127.0.0.1:2323/${props.obj}`)
  //       let json = await url.json()
  //       setdata(json)
  //       console.log("data" , json);
  //     } catch (error) {
  //       console.log("error in fetch data");
  //     }
      
  //   }
  // call()
  
    let os = props.obj === "actors" ? actors : props.obj === "anchors" ? anchors : props.obj == "influencers" ? influencers : props.obj == "writers" ? writers : []
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
