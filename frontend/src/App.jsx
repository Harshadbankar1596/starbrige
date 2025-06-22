import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Nav from "./components/nav";
import Content from "./components/containt";
import Main from "./components/main";
import Footer from "./components/footer";
import About from './components/about';
import Actors from "./components/section/actor"
import Oneperson from './components/section/oneperson';
import Form from "./components/form"
import Register from './components/register';

const Home = () => {
  return (
    <>
      <Content />
      <Main />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actors" element={<Actors obj={"actor"} />} />
        <Route path="/anchors" element={<Actors obj={"anchor"} />} />
        <Route path="/influencers" element={<Actors obj={"influencer"} />} />
        <Route path="/writers" element={<Actors obj={"writer"} />} />
        <Route path="/reelshoots" element={<Actors obj={"reelshoot"} />} />
        <Route path="/mehandiartists" element={<Actors obj={"mehendiartist"} />} />
        <Route path="/makeupartists" element={<Actors obj={"makeupartist"} />} />
        <Route path="/:type/:name" element={<Oneperson />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
