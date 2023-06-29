import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const sizeTest = testimonialsData.length
    const [current, setCurrent] = useState(0)

    const leftHandler = () => {
        current === 0 ? setCurrent(sizeTest - 1) : setCurrent((prev) => prev - 1)
    }

    const rightHandler = () => {
        current === sizeTest - 1 ? setCurrent(0) : setCurrent((prev) => prev + 1)
    }

    return (
        <div className="testimonial-container">
            <div className="testimonial-left">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>

                <span>{testimonialsData[current].review}</span>

                <div>
                    <span>{testimonialsData[current].name}</span>
                    <span> - {testimonialsData[current].status}</span>
                </div>

            </div>
            <div className="testimonial-right">
                <div></div>
                <div></div>

                <img src={testimonialsData[current].image} alt="user pi" />

                <div>
                    <img src={leftArrow} alt="" onClick={leftHandler} />
                    <img src={rightArrow} alt="" onClick={rightHandler} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
