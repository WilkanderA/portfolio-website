
import { memo } from 'react';

const Footer = memo(function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="contact-section">
                        <h3>Let's Connect</h3>
                        <p>I'm always open to discussing new opportunities and interesting projects.</p>
                        <div className="contact-links">
                            <a href="mailto:wilkanderbusiness@gmail.com" className="contact-link">
                                📧 Email
                            </a>
                            <a href="https://linkedin.com/in/wilkander" className="contact-link" target="_blank" rel="noopener noreferrer">
                                💼 LinkedIn
                            </a>
                            <a href="https://github.com/WilkanderA" className="contact-link" target="_blank" rel="noopener noreferrer">
                                🐙 GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Built by Wilkander ❤️</p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;