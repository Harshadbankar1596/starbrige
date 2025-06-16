import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from "../components/nav";
import Content from "../components/containt";
import Main from "../components/main";
import Servis from "../components/servis";
import Footer from "../components/footer";
import About from '../components/about';
import Actors from "../components/section/actor"

const Home = () => {
  return (
    <>
      <Content />
      <Main />
      <Servis />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
