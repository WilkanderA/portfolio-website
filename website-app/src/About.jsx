import { memo } from 'react';
import profileImage from './assets/Cherry Blossom.jpg';

const About = memo(function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-hero">
                    <div className="about-intro">
                        <h3 className="position-tag">Full-Stack Developer</h3>
                        <h1 className="hero-title">
                            <span className="greeting">Hello, I'm</span>
                            <span className="name-highlight">Wilkander Aleman</span>
                        </h1>
                        <p className="hero-subtitle">
                            Crafting exceptional digital experiences through innovative solutions
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="image-container">
                            <div className="image-placeholder">
                                <img src={profileImage} alt="Profile-picture" id="profile-picture"/>
                            </div>
                            <div className="image-decoration"></div>
                        </div>
                    </div>
                </div>
                
                <div className="about-details">
                    <div className="about-story">
                        <h2 className="section-subtitle">About Me</h2>
                        <div className="story-content">
                            <p className="intro-text">
                                I'm a passionate software engineer with a deep love for creating beautiful, 
                                functional web experiences. My journey in technology is driven by the 
                                excitement of solving complex problems and transforming innovative ideas into reality.
                            </p>
                        </div>
                    </div>
                </div>
                

                <div className="about-actions">
                    <button className="btn btn-primary">
                        <span>Download Resume</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button 
                        className="btn btn-secondary" 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span>Let's Connect</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className="about-highlights">
                    <div className="highlight-item">
                        <div className="highlight-number">3+</div>
                        <div className="highlight-label">Years Experience</div>
                    </div>
                    <div className="highlight-item">
                        <div className="highlight-number">50+</div>
                        <div className="highlight-label">Projects Completed</div>
                    </div>
                    <div className="highlight-item">
                        <div className="highlight-number">100%</div>
                        <div className="highlight-label">Client Satisfaction</div>
                    </div>
                </div>

            </div>
        </section>
    );
});

export default About;