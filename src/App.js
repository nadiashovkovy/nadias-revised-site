import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the visible class when in view
          } else {
            entry.target.classList.remove('visible'); // Remove the visible class when out of view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">

      <header className="header">
        <nav className="fade-in">
            <ul>
                <li><a href="#home"class="enlarge-text-on-hover">welcome</a></li>
                <li><a href="#about"class="enlarge-text-on-hover">about</a></li>
                <li><a href="#projects" class="enlarge-text-on-hover">projects</a></li>
                <li><a href="#contact"class="enlarge-text-on-hover">contact</a></li>
            </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <img src = "images/page1bg1.png" className = "bg"/>
        <section id="home-content" className='home-content'> 
          <img src = "images/welcomeimg.png" className="welcome-img" />
        </section>
      </section>



      <section id="about" className="about">
        <section id="about-content" className='about-content fade-in'> 
          <img src = "images/learnallaboutme.png" className="about-img1"/>
        </section>
        <section id="skills-content" className='about-content fade-in'> 
        <img src = "images/afewskills.png" className="about-img1"/>
        </section>
        <img src = "images/page1bg2.png" className = "bg"/>
      </section>


      <section id="projects" className="projects">
        <section id="projects-content" className='projects-content fade-in'> 
  
        </section>
        <img src = "images/projectsbg1.png" className = "bg"/>
      </section>

      <section id = "footer" className="footer"> 

          <section id="contact-content" className='contact-content fade-in'>
            <button class="fake-btn">contact me!</button>
              <p>Name*</p>
              <input type="text" placeholder="Name"></input>
              <p>Email*</p>
              <input type="email" placeholder="Email"></input>
              <p>Message*</p>
              <textarea placeholder="Message" rows="6" cols="20"></textarea>
              <button class="real-btn3 enlarge-on-hover">Send Message</button>
          </section>
          {/* <img src = "images/footerrectangle.png" className='footer-rect'></img> */}

      </section>

      

    </div>
  );
}

export default App;
