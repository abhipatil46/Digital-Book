import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Models from './components/Models';
import Contact from './components/Contact';
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/models' element={<Models></Models>}></Route>
        <Route path='/contact' element={ <Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
