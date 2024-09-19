import React from 'react'
import './skills.css';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JAVASCRIPT from '../../assets/javascript.png';
import REACT from '../../assets/react.png';
import NODE from '../../assets/node.png'
import MONGODB from '../../assets/mongodb.png'

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Skills</span>
        <span className="skillDesc">I am a skilled and passionate web developer proficient in HTML, CSS, and JavaScript. I have foundational knowledge of MongoDB, React, and Node.js, and I am eager to deepen my expertise in these technologies to create innovative web applications. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={HTML} alt="HTML" className="skillBarimg"/>
                <div className="skillBarText">
                    <h2>HTML</h2>
                    <p>"I can create the structure of web pages."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={CSS} alt="CSS" className="skillBarimg"/>
                <div className="skillBarText">
                    <h2>CSS</h2>
                    <p>"I know how to make websites look good and work on all devices."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={JAVASCRIPT} alt="JAVASCRIPT" className="skillBarimg"/>
                <div className="skillBarText">
                    <h2>JAVASCRIPT</h2>
                    <p>"I can add interactive features to websites."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={REACT} alt="React" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>REACT</h2>
                    <p>"I build modern web apps using React."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={NODE} alt="NODE" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>NODE</h2>
                    <p>"I can build server-side applications with Node.js."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={MONGODB} alt="MONGODB" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>MONGODB</h2>
                    <p>"I use MongoDB to store and manage data for web apps."</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default skills
