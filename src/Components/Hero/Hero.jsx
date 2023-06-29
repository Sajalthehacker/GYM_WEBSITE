import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

// import Heart from '../../assets/heart.png'
// import hero_image from '../../assets/hero_image.png'
// import hero_image_back from '../../assets/hero_image_back.png'
// import Calories from '../../assets/calories.png'


import back from '../../assets/bgv1.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay muted loop className='background-video'>
                <source src={back} type='video/mp4' />
            </video>
            <div className="hero-left">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>shape</span>
                        <span> your</span>
                    </div>
                    <div>
                        <span>ideal </span>
                        <span className='stroke-text'>body</span>
                    </div>
                    <div>
                        <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+160</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+1678</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+52</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn hero-btn'>get started</button>
                    <button className='btn hero-btn'>learn more</button>
                </div>

            </div>

            <div className="hero-right">
                <button className="btn hero-btn">join now</button>
            </div>

        </div>
    )
}

export default Hero
