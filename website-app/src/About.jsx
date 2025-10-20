import { memo } from 'react';

const About = memo(function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="intro-text">
                            Hello! I'm a passionate developer who loves creating beautiful, 
                            functional web experiences. I enjoy solving complex problems 
                            and turning ideas into reality through code.
                        </p>
                        <p>
                            With a strong foundation in modern web technologies, I focus on 
                            building responsive, user-friendly applications that make a difference. 
                            I'm always eager to learn new technologies and take on exciting challenges.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary">Download Resume</button>
                            <button 
                                className="btn btn-secondary" 
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-placeholder">
                            <span>Your Photo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default About;