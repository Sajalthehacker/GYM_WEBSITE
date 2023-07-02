import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import back from '../../assets/bgv1.mp4'
import NumberCounter from 'number-counter'

const Hero = () => {
    return (
        <div className='hero' id="hero_id">
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
                        <span><NumberCounter end={140} start={70} delay='2' preFix='+' /></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={1678} start={1200} delay='2' preFix='+' /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={52} start={8} delay='2' preFix='+' /></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn hero-btn'>get started</button>
                    <button className='btn hero-btn'>learn more</button>
                </div>

                {/* <button className="btn hero-btn">join now</button> */}

            </div>

            <div className="hero-right">
                <button className="btn hero-btn">join now</button>
            </div>

        </div>
    )
}

export default Hero
