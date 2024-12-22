import React from 'react';
import './About.css';
import myImage from '../static/subbu_portfolio.jpg';

const About = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <div className="about-me-text">
                    <h1 className="animate-text">About Me</h1>
                    <p className="typewriter">
                    Hi, I'm <strong>Subrahmanya B A (pedroCoder)</strong>, a passionate developer with extensive experience in backend systems, particularly with Django. I have a strong background in database management and an enduring love for deep learning and data science. I thrive on solving complex problems, continuously expanding my skills, and staying up-to-date with cutting-edge technologies. Whether it's crafting robust Django Rest APIs or exploring the latest advancements in deep learning, I'm always eager to learn and innovate.
                    </p>
                    <div className="skills-section">
                        <h2>Skills</h2>
                        <ul>
                            <li>Backend Development (Django, Node.js)</li>
                            <li>Frontend Development (React, JavaScript)</li>
                            <li>Database Management (SQL, NoSQL)</li>
                            <li>Deep Learning & Data Science</li>
                            <li>Python and Unix Shell Scripting</li>
                        </ul>
                    </div>
                    <div className="hobbies-section">
                        <h2>Hobbies</h2>
                        <ul>
                            <li>Music, Anime and Gaming</li>
                            <li>Coding and exploring new technologies</li>
                        </ul>
                    </div>
                    <div className="contact-section">
                        <h2>Contact</h2>
                        <p>If you'd like to get in touch, feel free to reach out via email, phone, or connect with me on social media:</p>
                        <ul>
                            <li>Email: <a href="mailto:subrahmanyaba02@gamil.com">subrahmanyaba02@gamil.com</a></li>
                            <li>Phone: <a href="tel:+918217237795">+91 8217237795</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/subrahmanya-b-a-b96090228/" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></li>
                            <li>Twitter: <a href="https://x.com/pedroCoder02" target="_blank" rel="noopener noreferrer">@pedroCoder02</a></li>
                        </ul>
                    </div>
                </div>
                <div className="about-me-image">
                    <img src={myImage} alt="Subrahmanya B A" className="animate-image" />
                </div>
            </div>
        </div>
    );
};

export default About;
