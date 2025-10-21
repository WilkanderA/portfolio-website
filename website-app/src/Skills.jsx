import { memo } from 'react';
import jsIcon from './assets/java-script.png';
import reactIcon from './assets/react.png';
import nodeIcon from './assets/nodejs.png';
import pythonIcon from './assets/python.png';
import tsIcon from './assets/typescript.png';
import cssIcon from './assets/css-3.png';
import htmlIcon from './assets/html.png';
import mongoIcon from './assets/Mongodb.png';
import dockerIcon from './assets/docker.png';

const Skills = memo(function Skills() {
    return (
        <section className="skills-section">
            <div className="skills-scroll">
                <div className="skills-track">
                    <div className="skill-item">
                        <img src={jsIcon} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-item">
                        <img src={reactIcon} alt="React" />
                        <span>React</span>
                    </div>
                    <div className="skill-item">
                        <img src={nodeIcon} alt="Node.js" />
                        <span>Node.js</span>
                    </div>
                    <div className="skill-item">
                        <img src={pythonIcon} alt="Python" />
                        <span>Python</span>
                    </div>
                    <div className="skill-item">
                        <img src={tsIcon} alt="TypeScript" />
                        <span>TypeScript</span>
                    </div>
                    <div className="skill-item">
                        <img src={cssIcon} alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="skill-item">
                        <img src={htmlIcon} alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="skill-item">
                        <img src={mongoIcon} alt="MongoDB" />
                        <span>MongoDB</span>
                    </div>
                    <div className="skill-item">
                        <img src={dockerIcon} alt="Docker" />
                        <span>Docker</span>
                    </div>
                    <div className="skill-item">
                        <img src={jsIcon} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-item">
                        <img src={reactIcon} alt="React" />
                        <span>React</span>
                    </div>
                    <div className="skill-item">
                        <img src={nodeIcon} alt="Node.js" />
                        <span>Node.js</span>
                    </div>
                    <div className="skill-item">
                        <img src={pythonIcon} alt="Python" />
                        <span>Python</span>
                    </div>
                    <div className="skill-item">
                        <img src={tsIcon} alt="TypeScript" />
                        <span>TypeScript</span>
                    </div>
                    <div className="skill-item">
                        <img src={cssIcon} alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="skill-item">
                        <img src={htmlIcon} alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="skill-item">
                        <img src={mongoIcon} alt="MongoDB" />
                        <span>MongoDB</span>
                    </div>
                    <div className="skill-item">
                        <img src={dockerIcon} alt="Docker" />
                        <span>Docker</span>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Skills;