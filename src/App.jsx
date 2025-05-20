import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './page/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
    </>
  )
}

export default App