import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Models from './components/Models';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Models></Models>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
