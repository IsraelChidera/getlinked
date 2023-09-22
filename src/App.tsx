import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/widgets/Navbar';
import Register from './pages/Register';

function App() {

  return (
    <div className='bg-secondary relative text-white'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App
