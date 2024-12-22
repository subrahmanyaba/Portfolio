import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Spotify from './components/Spotify'; 
// import MusicPlayer from './components/MusicPlayer'; // Import the MusicPlayer component

const App = () => {
  return (
    <Router>
      {/* <div className="container-fluid p-0"> */}
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
      {/* <MusicPlayer />  */}
      <Spotify/>
      {/* </div> */}
    </Router>
  );
};

export default App;
