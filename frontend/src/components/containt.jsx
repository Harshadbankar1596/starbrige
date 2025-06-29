import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './containt.css';



const Containt = () => {
  let videos = useRef(null);
  videos.current = [
    { id: 1, url: "/reel.mp4" },
    { id: 2, url: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4" },
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % videos.current.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + videos.current.length) % videos.current.length);
  };

  const handleManual = (direction) => {
    clearInterval(intervalRef.current);
    direction === 'next' ? nextSlide() : prevSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="containtbox">
      <div className="paragraf">
        <h1 className="heading">
          Welcome to <span>StarBridge India</span>
        </h1>
      </div>

      <div className="lower">

        <div className="para">
          <p id="para">Welcome to our professional Celebrity & Influencer Management platform.
            We help brands connect with top celebrities and digital influencers to create powerful campaigns that leave a lasting impact.</p>
          <Link to="/form" className="button">
            <p>Get Started</p>
          </Link>
        </div>

        <div className="video-slider-section">
          <div className="video-slider">
            {videos.current.map((video, index) => (
              <div
                key={video.id}
                className={`video-slide ${index === current ? 'active' : ''}`}
              >
                <video
                  src={video.url}
                  type={"video/mp4"}
                  autoPlay
                  muted
                  loop
                  // controls
                  className="slide-video"
                />
              </div>
            ))}

            <button className="nav-button left" onClick={() => handleManual('prev')}>❮</button>
            <button className="nav-button right" onClick={() => handleManual('next')}>❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containt;