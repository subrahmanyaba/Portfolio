// src/components/HomePage.js
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const sectionsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  const smoothScroll = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const scrollPosition = startPosition + (distance * easeInOutQuad(progress));
      window.scrollTo(0, scrollPosition);
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    };

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    window.requestAnimationFrame(animation);
  };

  const scrollToSections = () => {
    if (sectionsRef.current) {
      const targetPosition = sectionsRef.current.getBoundingClientRect().top + window.pageYOffset;
      smoothScroll(targetPosition, 1000);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    [aboutRef, projectsRef, certificationsRef, experienceRef, skillsRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [aboutRef, projectsRef, certificationsRef, experienceRef, skillsRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="homepage">
      <header>
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects and get to know more about me.</p>
          <div className="button-container">
            <button className="explore-button" onClick={scrollToSections}>
              Explore
            </button>
          </div>
        </div>
      </header>

      <div className="sections-container" ref={sectionsRef}>
        <section className="skills-section" ref={skillsRef}>
          <h2>Technical Skills</h2>
          <div className="skills-list-container">
            <div className="skills-category">
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Backend</h3>
              <ul>
                <li>Django</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>FastAPI</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Data Science</h3>
              <ul>
                <li>Python</li>
                <li>TensorFlow</li>
                <li>CNN, LSTM</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Computer Vision</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>DevOps</h3>
              <ul>
                <li>AWS</li>
                <li>RabbitMQ</li>
                <li>AWS Cloudfront</li>
                <li>AWS Lambda</li>
                <li>AWS API Gateway</li>
                <li>AWS EC2</li>
                <li>AWS CloudWatch</li>
                <li>AWS S3</li>
                <li>Jenkins</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Database & Server Management</h3>
              <ul>
                <li>Oracle SQL</li>
                <li>WinSCP</li>
                <li>PuTTY</li>
                <li>MySQL</li>
                <li>Unix</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Programming & Other Skills</h3>
              <ul>
                <li>Data Structures and Algorithms</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <div className="sections-right">
          <section className="section about" ref={aboutRef}>
            <h2>About Me</h2>
            <p>Learn more about my journey and passion for development.</p>
            <Link to="/about">
              <button className="take-me-there-button">Take me there</button>
            </Link>
          </section>

          <section className="section projects" ref={projectsRef}>
            <h2>Projects</h2>
            <p>Check out the projects I've worked on.</p>
            <Link to="/projects">
              <button className="take-me-there-button">Take me there</button>
            </Link>
          </section>

          <section className="section certifications" ref={certificationsRef}>
            <h2>Certifications</h2>
            <p>See my certifications and qualifications.</p>
            <Link to="/certifications">
              <button className="take-me-there-button">Take me there</button>
            </Link>
          </section>

          <section className="section experience" ref={experienceRef}>
            <h2>Experience</h2>
            <p>Discover my professional experience.</p>
            <Link to="/experience">
              <button className="take-me-there-button">Take me there</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
