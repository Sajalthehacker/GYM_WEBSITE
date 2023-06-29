import { useEffect } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className="App">
      <Hero /> 

      <Programs />

      <Reasons />

      <Plans />

      <Testimonials />

      <Join />

      <div style={{height:"15rem"}}>a</div>
    </div>
  );
}

export default App;
