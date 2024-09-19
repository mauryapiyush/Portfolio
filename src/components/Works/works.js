import React, { useState } from "react";
import './works.css';
import Portfolio1 from '../../assets/mini-calendar.png'
import Portfolio2 from '../../assets/Tic-Tac-Toe.png'
import Portfolio3 from '../../assets/piano.png'
import Portfolio4 from '../../assets/flowershop.png'
import Portfolio5 from '../../assets/ShoeKicks.png'
import Portfolio6 from '../../assets/YouTubeClone.png'

const Works = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        { img: Portfolio1, name: 'Calendar', link: 'https://piyushcalendar.netlify.app/' },
        { img: Portfolio2, name: 'Tic-Tac-Toe', link: 'https://threeinrowgame.netlify.app/' },
        { img: Portfolio3, name: 'Piano Maestro', link: 'https://pianomaestro.netlify.app/' },
        { img: Portfolio4, name: 'Flower Shop', link: 'https://flowershopcom.netlify.app/' },
        { img: Portfolio5, name: 'ShoeKicks', link: 'https://mauryapiyush.github.io/ShoeKicks/' },
        { img: Portfolio6, name: 'YouTube Clone', link: '/' },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">"I focus on every detail to make sure my work is just right. I'm excited to use my skills to help businesses succeed and build a strong online presence."</span>
            <div className="worksImgs">
                {displayedProjects.map((project, index) => (
                    <div key={index} className="worksImgContainer">
                        <img src={project.img} alt={project.name} className="worksImg" />
                        <div className="overlay">
                            <div className="projectName">{project.name}</div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <button className="pressBtn">Open</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <button className="workBtn" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'See More'}
            </button>
        </section>
    );
}

export default Works;
