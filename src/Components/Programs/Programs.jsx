import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="programs-container">
            <div className="programs-heading">
                <span className='stroke-text'>explore our</span>
                <span>programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="program-cards" >
                {
                    programsData.map((program, index) => {
                        return <div className="card" key={index} data-aos='fade-right'>
                            {program.image}
                            <div className="card-text">
                                <span>{program.heading}</span>
                                <span>{program.details}</span>
                            </div>
                            <div className="join-now-program">
                                <span>join now</span>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Programs
