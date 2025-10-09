import {React, useEffect} from 'react';
import AnimalSupport from './components/AnimalSupport/AnimalSupport';
import AOS from 'aos';
import 'aos/dist/aos.css';

  
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <AnimalSupport />
    </div>
  );
}

export default App;
