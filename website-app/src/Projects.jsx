import { memo } from 'react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather application that provides current conditions and forecasts with beautiful visualizations.",
        technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
        liveLink: "#",
        githubLink: "#"
    }
];

const Projects = memo(function Projects() {

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <span>Project Screenshot</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                    <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Projects;