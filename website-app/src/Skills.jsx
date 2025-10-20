import { memo } from 'react';

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"]
    },
    {
        title: "Database",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
];

const Skills = memo(function Skills() {

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Skills;