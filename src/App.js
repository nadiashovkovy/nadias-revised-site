import React from 'react';
import './styles.css';
import Nav from './components/Nav';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="App">
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <Nav />
      <ThemeToggle />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
