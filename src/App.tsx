// src/App.tsx
import React from 'react';
// import Header from './components/Header';
import About from './Components/About';
// import Projects from './components/Projects';
import Contact from './Components/Contact';
// import Footer from './components/Footer';
import MultiLayerParallax from './Components/MultiParallax';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <MultiLayerParallax/>
      <div className="w-full bg-[#06141D]">
        <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
