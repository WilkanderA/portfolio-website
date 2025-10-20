import { useCallback, memo } from 'react';

const Header = memo(function Header() {
    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const handleAboutClick = useCallback(() => scrollToSection('about'), [scrollToSection]);
    const handleSkillsClick = useCallback(() => scrollToSection('skills'), [scrollToSection]);
    const handleProjectsClick = useCallback(() => scrollToSection('projects'), [scrollToSection]);
    const handleContactClick = useCallback(() => scrollToSection('contact'), [scrollToSection]);

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>Portfolio</h1>
                </div>
                <nav className="nav">
                    <button onClick={handleAboutClick} className="nav-link">About</button>
                    <button onClick={handleSkillsClick} className="nav-link">Skills</button>
                    <button onClick={handleProjectsClick} className="nav-link">Projects</button>
                    <button onClick={handleContactClick} className="nav-link">Contact</button>
                </nav>
            </div>
        </header>
    );
});

export default Header;