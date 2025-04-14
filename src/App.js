import React, { useEffect, useState } from 'react';
import './styles.css';

function App() {
  useEffect(() => {}, []);


  const [setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, [setIsVisible]);

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
        <img src = "images/page1bg1.png" alt = "bg1" className = "bg"/>
        <section id="home-content" className='home-content'> 
          <img src = "images/welcomeimg.png"  alt = "welcome" className="welcome-img" />
        </section>
      </section>

      <img src = "images/page1bg2.png" alt = "bg2" className = "bg2"/>

      <section id="about" className="about">
        <section id="about-content" className='about-content fade-in'> 
          <img src = "images/learnallaboutme.png"  alt = "learnabtme" className="about-img1"/>

          <img src = "images/abtme.png"  alt = "abtme" className = "about-img2"/>
          
          <img src = "images/workexp.png"  alt = "abtme"  className="about-img3"/>
          <section id = "work-experience" className= "work-experience">
            <div class= "work-experience-box">
              <h1 className="work-experience-title">Pivotal Energy Solutions (Current)</h1>
              <div className="work-experience-content">
                <p>Software Engineering Intern at <a href="https://pivotalenergysolutions.com/" target ="blank" className="work-link">Pivotal Energy Solutions</a></p>
                <p>Since Apr 2024</p>
                <p>Enhanced application coverage by developing and debugging test methods across 50+ files.</p>
              </div>
              </div>
          </section>

          <section id = "work-experience" className= "work-experience">
            <div class= "work-experience-box">
              <h1 className="work-experience-title">TheCoderSchool (Past)</h1>
              <div className="work-experience-content">
                <p>Code Coach and Curriculum Developer at <a href="https://www.thecoderschool.com/locations/gilbert/" target ="blank" className="work-link">TheCoderSchool</a></p>
                <p>Sep 2022 - June 2024</p>
                <p>Taught Java, Python, and Scratch to over 30 students in weekly coding sessions.</p>
              </div>
              </div>
          </section>

          <button class="resume-btn" onClick={() => window.open("https://docs.google.com/document/d/186M1_Q00dXBVX05e31C9_-zDlmeups3Pqb--8ydOx4Y/edit?usp=sharing", "_blank")}> My Complete Resume</button>
        </section>

        <section id="skills-content" className='skills-content fade-in'> 
          <img src = "images/afewskills.png"  alt = "skills" className="about-img1"/>


          <section id = "skills-boxes" className= "skills-boxes">
          <div class="skills-box fade-in">
            <div class="flip-inner">
                <div class="flip-front">
                    <p>Programming Languages</p>
                </div>
                <div class="flip-back">
                    <p>Java, Python, Javascript, C/C++, Swift/SwiftUI</p>
                </div>
            </div>
          </div>

          <div class="skills-box fade-in">
            <div class="flip-inner">
              <div class="flip-front">
                  <p>Tools & Frameworks</p>
              </div>
              <div class="flip-back">
                  <p>React, PyTorch, AWS, Xcode, Figma</p>
              </div>
            </div>
          </div>

          <div class="skills-box fade-in">
            <div class="flip-inner">
              <div class="flip-front">
                  <p>Development Areas</p>
              </div>
              <div class="flip-back">
                  <p>Web & Mobile Development, AI & Machine Learning, UI/UX</p>
              </div>
            </div>
          </div>
          </section>
        </section>
      </section>





      <section id="projects" className="projects">
        <img src = "images/projectsbg1.png"  alt = "projects" className = "bg1"/>
        <section id="projects-content" className='projects-content fade-in'> 
        <img src = "images/checkout.png"  alt = "projects" className="project-img1"/>


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
          <img src = "images/projectline.png"  alt = "line" className="project-line" />
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
            <img src="images/VolunTeen.png"  alt = "volunteen" className="project-image" />
            <p className="project-description">
            VolunTeen is an iOS app that aims to connect high school students with volunteering events near them. With Firebase integration, my app offers reliable user authentication. Additonally, my app contains a home view, a search view, a chat view (with real in-app messaging) a map viow, and a profile view. 
            </p>
          </div>
          <p className="project-details">
            When I began programming VolunTeen, I had absolutely no prior knowledge of Swift or SwiftUI. Choosing to use these programming languages was a massive learning curve and I spent dozens of hours watching YouTube tutorials 
          </p>
          <img src = "images/projectline.png"  alt = "line" className="project-line" />
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
            <img src="images/maskrcnn.png"  alt = "research" className="project-image" />
            <p className="project-description">
            In my resarch project, I discussed how Mask R-CNN sets itself apart from other object detectors. I also performed transfer learning with a Mask R-CNN (pre-trained with the COCO2017 dataset) using Pytorch in Google Colab. My model produced highly precise borders, masks, and bounding box outputs. 
            </p>
          </div>
          <p className="project-details">
          This project was made for my Honors Resarch class and it mainly served as an introduction to artificial intelligence for me. I placed second in my district's science fair. 
          </p>
          <img src = "images/projectline.png"  alt = "line" className="project-line" />
          <div className="project-links">
            <a href="https://docs.google.com/presentation/d/1CcjcqhZQZ-sD7np40zYBHHCXuLbPojKV/edit?usp=sharing&ouid=114431329760915144189&rtpof=true&sd=true" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Poster</a>
            <a href="https://colab.research.google.com/drive/1JkGjOoxuPw9uFBMJsBpK7EFeSgKrJioR?usp=sharing" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Public Code</a>
          </div>  
      </section>


      <section className="project-card">
          <h1 className="project-title">Kids in Tech</h1>
          <div className="project-tags">
            <span className="tag">Community Service</span>
            <span className="tag">Education</span>
            <span className="tag">Robotics</span>
          </div>
          <div className="project-content">
            <img src="images/kidsintech.png"  alt = "kidsintech" className="project-image" />
            <p className="project-description">
            In 2022, I started a volunteering organization teaching engineering/coding at elementary schools. I also spearheaded the creation of a school’s First Lego League team, built the organization’s website, and accumulated 150+ volunteer hours.
            </p>
          </div>
          <p className="project-details">
            Through this organization, we were able to help hundreds of students learn how to become engineers via block coding and various robotics workshop.
          </p>
          <img src = "images/projectline.png"  alt = "line" className="project-line" />
          <div className="project-links">
            <a href="https://kidsintech-arizona.webflow.io/" target ="blank" className="project-link">
              <img src="images/icon.png" alt="icon" className="link-icon" />
              Live Site</a>
          </div>  
      </section>



       {/* end of project cards */}
        </section>

        <section id="wips-content" className='wips-content fade-in'>
          <img src = "images/wips.png"  alt = "wips" className="wips-img"/>

          <div className="wip-cards-container">
          <section className="wip-card">
            <h1 className="wip-title">Totally Tech</h1>
            <div className="wip-tags">
              <span className="tag">AI/ML</span>
              <span className="tag">Cybersecurity</span>
              <span className="tag">Social</span>
            </div>
            <div className="wip-content">
              <img src="images/totallytech.png"  alt = "tt" className="wip-image" />
              <p className="wip-description">
              By fostering supportive networks and sharing stories about tech issues that matter to them, we can empower women to confidently engage and even lead in the field.
              </p>
            </div>
            <img src = "images/projectline.png"  alt = "tt" className="wip-line" />
            <div className="project-links">
              <a href="https://github.com/nadiashovkovy/totally-tech" target ="blank" className="project-link">
                <img src="images/icon.png" alt="icon" className="link-icon" />
                In-Progress Code</a>
            </div>  
          </section>

          <section className="wip-card">
            <h1 className="wip-title">Ichigo</h1>
            <div className="wip-tags">
              <span className="tag">Unity</span>
              <span className="tag">Graphics</span>
              <span className="tag">C#</span>
              <span className="tag">Video Game</span>
            </div>
            <div className="wip-content">
              <img src="images/tomorrow.png"  alt = "ichigo" className="wip-image" />
              <p className="wip-description">
              In Gabrielle Zevin's novel "Tomorrow, and Tomorrow, and Tomorrow," Ichigo is a game created by Sam and Sadie while they are in college. I am attempting to recreate this fictional game in Unity.
              </p>
            </div>
            <img src = "images/projectline.png"  alt = "line" className="wip-line" />
            <div className="project-links">
              <a href="https://github.com/nadiashovkovy" target ="blank" className="project-link">
                <img src="images/icon.png" alt="icon" className="link-icon" />
                In-Progress Code</a>
            </div>  
          </section>
          </div>

        </section>

      </section>

      <section id = "contact" className="contact"> 

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
          <img src ="images/Illustration.png"  alt = "illustration" className = "footer-img fade-in"/>
      </section>

      <section id = "socials" className = "socials">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/nadia-shovkovy/" target ="blank" className="project-link">
            <img src="images/linkedin.png" alt="icon" className="foot-link-icon" />
            LinkedIn</a>
          <a href="https://github.com/nadiashovkovy" target ="blank" className="project-link">
            <img src="images/gh.png" alt="icon" className="foot-link-icon" />
            Github</a>
          <a href="https://medium.com/@nadiashovkovy" target ="blank" className="project-link">
            <img src="images/medium.png" alt="icon" className="foot-link-icon" />
            Medium</a>
        </div>  
      </section>

      

    </div>
  );
}

export default App;
