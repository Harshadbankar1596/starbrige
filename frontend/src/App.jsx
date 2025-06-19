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
import Oneperson from '../components/section/oneperson';
import Form from "../components/form"

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actors" element={<Actors obj={"actors"} />} />
        <Route path="/anchors" element={<Actors obj={"anchors"} />} />
        <Route path="/influencers" element={<Actors obj={"influencers"} />} />
        <Route path="/writers" element={<Actors obj={"writers"} />} />
        <Route path="/mehandi artist" element={<Actors obj={"mehandiartist"} />} />
        <Route path="/makeup artist" element={<Actors obj={"makeup artist"} />} />
        <Route path="/:type/:name" element={<Oneperson />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
