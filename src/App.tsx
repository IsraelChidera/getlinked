import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/widgets/Navbar';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';


function App() {


  return (
    <div className='bg-secondary relative text-white'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={< NoMatch/>} />
      </Routes>

    </div>
  )
}

export default App
