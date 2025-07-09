import logo from './logo.svg';
import './App.css';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import DropMail from './components/sections/DropMail';
import TalkBusiness from './components/sections/TalkBusiness';
import Projects from './components/sections/Projects';

import { useLocation, Routes, Route } from 'react-router-dom';
import {AnimatePresence} from "framer-motion"


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/talk" element={<TalkBusiness />} />
          <Route path="/drop-mail" element={<DropMail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
