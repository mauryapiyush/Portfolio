import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Piyush</span> <br/>Web Developer</span>
            <p className="introPara">A passionate web developer skilled in HTML, CSS, and <br/> JavaScript. I create visually stunning, user-friendly, and <br/> responsive web applications. Driven by a love for <br/> technology, I continuously learn and evolve in my field.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
