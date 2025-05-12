import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
// import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-light text-dark">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;