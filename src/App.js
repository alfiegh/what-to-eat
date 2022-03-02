import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Search from './components/SearchOptions/SearchOptions';
import AboutUs from './pages/About/AboutUs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Demo from './pages/Demo/Demo';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router className='App'>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/what-to-eat' element={<Home />} />{' '}
        <Route path='/about' element={<AboutUs />} />{' '}
        <Route path='/demo' element={<Demo />} />{' '}
        <Route path='/contact' element={<Contact />} />{' '}
      </Routes>
    </Router>
  );
}

export default App;
