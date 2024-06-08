import React from 'react'
import './Hero.css'
import img11 from '../../assets/kasun1.png'

function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Full Stack Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div className='hero-img03'>
          
          <img src={img11} alt="" />
        </div>

        <div className='hero-img02'>
            <div className='hero-img01'>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/HTML.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/CSS.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TailwindCSS-Light.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Bootstrap.svg" alt="" />
                </div>
            </div>
            <div className='hero-img01'>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Java-Light.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Spring-Light.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Light.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MongoDB.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MySQL-Light.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Git.svg" alt="" />
                </div>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
