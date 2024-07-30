import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skill.css'; 


const skills = [
    { name: 'HTML', level: 90},
    { name: 'CSS', level: 80},
    { name: 'JavaScript', level: 70},
    { name: 'Bootstrap', level: 80 },
    { name: 'React.js', level: 70 },
    { name: 'MySQL', level: 60 },

];

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="section_title center">
                    <p>My Skills</p>
                </div>
                <div className="skills-content">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <CircularProgressbar
                                value={skill.level}
                                text={`${skill.level}%`}
                                styles={buildStyles({
                                    textSize: '16px',
                                    pathColor: '#fd6e0a',
                                    textColor: '#fd6e0a',
                                    trailColor: '#d6d6d6',
                                })}
                            />
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
              
            </div>
        </section>
    );
};

export default Skills;
