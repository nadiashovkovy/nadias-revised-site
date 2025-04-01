import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">

      <header className="header">
        <nav>
            <ul>
                <li><a href="#about"class="enlarge-text-on-hover">about</a></li>
                <li><a href="#search"class="enlarge-text-on-hover">services</a></li>
                <li><a href="#download"class="enlarge-text-on-hover">download</a></li>
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


      {/* <section id = "footer" className="footer"> 
        <p className="footer-text">made with love by nadia shovkovy</p>
      </section> */}

    </div>
  );
}

export default App;
