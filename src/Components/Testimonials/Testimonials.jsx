import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {

    const sizeTest = testimonialsData.length
    const [current, setCurrent] = useState(0)

    const leftHandler = (e) => {
        current === 0 ? setCurrent(sizeTest - 1) : setCurrent((prev) => prev - 1)
        console.log(e.target);
    }

    const rightHandler = () => {
        current === sizeTest - 1 ? setCurrent(0) : setCurrent((prev) => prev + 1)
    }

    return (
        <div className="testimonial-container" id="testimonials_id">
            <div className="testimonial-left">
                <span data-aos="fade-right">Testimonials</span>
                <span className='stroke-text' data-aos="fade-right">What they</span>
                <span data-aos="fade-right">say about us</span>

                <span data-aos="fade-right">{testimonialsData[current].review}</span>

                <div data-aos="fade-right">
                    <span>{testimonialsData[current].name}</span>
                    <span> - {testimonialsData[current].status}</span>
                </div>

            </div>
            <div className="testimonial-right">
                <div className='testimonial-images'>
                    <div data-aos="fade-right"></div>
                    <div data-aos="fade-left"></div>

                    <img src={testimonialsData[current].image} alt="user pi" data-aos="zoom-out" key={current} />
                </div>

                <div>
                    <img src={leftArrow} alt="" onClick={leftHandler} />
                    <img src={rightArrow} alt="" onClick={rightHandler} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
