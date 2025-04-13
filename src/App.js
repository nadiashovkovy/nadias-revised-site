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
      { threshold: 0.05 } // Trigger when 10% of the element is visible
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
          <img src ="images/Illustration.png" className = "about-img2"/>
        </section>

        <section id="skills-content" className='about-content fade-in'> 
          <img src = "images/afewskills.png" className="about-img1"/>
        </section>
        <img src = "images/page1bg2.png" className = "bg"/>
      </section>





      <section id="projects" className="projects">
        <img src = "images/projectsbg1.png" className = "bg"/>
        <section id="projects-content" className='projects-content fade-in'> 
        <img src = "images/checkout.png" className="project-img1"/>


        {/* // my projects: */}

        <section className="project-card">
          <h1 className="project-title">Eco-IQ</h1>
          <div className="project-tags">
            <span className="tag">Hackathon</span>
            <span className="tag">HTML/CSS</span>
            <span className="tag">Python Backend</span>
            <span className="tag">OpenAI Integration</span>
          </div>
          <div className="project-content">
            <img src="images/ecoiqimg.png" alt="Eco-IQ Mockup" className="project-image" />
            <p className="project-description">
              Eco-IQ is an AI-powered site that evaluates the sustainability of business models by analyzing their environmental impact across key areas (environmental impact, business operations, & supply chain). Using GPT-4, Eco-IQ generates a comprehensive sustainability score (a numerical value between 1 and 100), highlighting a company's strengths and weaknesses.
            </p>
          </div>
          <p className="project-details">
            I built this project using React (combining languages like JavaScript, Python & CSS) and I deployed it using Render (backend) and Netlify (frontend). I also integrated OpenAI by obtaining and implementing an API key.
          </p>
          <img src = "images/projectline.png" className="project-line" />
          <div className="project-links">
            <a href="https://eco-iq.netlify.app/" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Live Demo</a>
            <a href="https://youtu.be/gbt07IEEAIY?feature=shared" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Video</a>
            <a href="https://github.com/nadiashovkovy/eco-iq" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Public Code</a>
          </div>  
      </section>

      <section className="project-card">
          <h1 className="project-title">VolunTeen</h1>
          <div className="project-tags">
            <span className="tag">Swift/SwiftUI</span>
            <span className="tag">XCode</span>
            <span className="tag">Firebase</span>
          </div>
          <div className="project-content">
            <img src="images/VolunTeen.png" className="project-image" />
            <p className="project-description">
            VolunTeen is an iOS app that aims to connect high school students with volunteering events near them. With Firebase integration, my app offers reliable user authentication. Additonally, my app contains a home view, a search view, a chat view (with real in-app messaging) a map viow, and a profile view. 
            </p>
          </div>
          <p className="project-details">
            When I began programming VolunTeen, I had absolutely no prior knowledge of Swift or SwiftUI. Choosing to use these programming languages was a massive learning curve and I spent dozens of hours watching YouTube tutorials 
          </p>
          <img src = "images/projectline.png" className="project-line" />
          <div className="project-links">
            <a href="https://youtu.be/DiOY3Yxt-EM?feature=shared" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Video</a>
            <a href="https://github.com/nadiashovkovy/VolunTeen_AZ" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Public Code</a>
          </div>  
      </section>

      <section className="project-card">
          <h1 className="project-title">Transfer Learning With Mask R-CNN</h1>
          <div className="project-tags">
            <span className="tag">Research</span>
            <span className="tag">PyTorch</span>
            <span className="tag">AI/ML</span>
          </div>
          <div className="project-content">
            <img src="images/maskrcnn.png" className="project-image" />
            <p className="project-description">
            In my resarch project, I discussed how Mask R-CNN sets itself apart from other object detectors. I also performed transfer learning with a Mask R-CNN (pre-trained with the COCO2017 dataset) using Pytorch in Google Colab. My model produced highly precise borders, masks, and bounding box outputs. 
            </p>
          </div>
          <p className="project-details">
          This project was made for my Honors Resarch class and it mainly served as an introduction to artificial intelligence for me. I placed second in my district's science fair. 
          </p>
          <img src = "images/projectline.png" className="project-line" />
          <div className="project-links">
            <a href="https://docs.google.com/presentation/d/1CcjcqhZQZ-sD7np40zYBHHCXuLbPojKV/edit?usp=sharing&ouid=114431329760915144189&rtpof=true&sd=true" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Poster</a>
            <a href="https://colab.research.google.com/drive/1JkGjOoxuPw9uFBMJsBpK7EFeSgKrJioR?usp=sharing" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Public Code</a>
          </div>  
      </section>



       {/* end of project cards */}
        </section>
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
