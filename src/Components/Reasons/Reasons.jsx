import React from 'react'
import './Reasons.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import adidas from '../../assets/adidas.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
    return (
        <div className="Reasons-container" id="reasons_id">
            <div className="left-reasons">
                <img src={image1} alt="image11-reasons" data-aos="zoom-out"/>
                <img src={image2} alt="image11-reasons" data-aos="zoom-out"/>
                <img src={image3} alt="image11-reasons" data-aos="zoom-out"/>
                <img src={image4} alt="image11-reasons" data-aos="zoom-out"/>
            </div>
            <div className="right-reasons">
                <span data-aos="fade-left">some reasons</span>
                <div className='reasons-text' data-aos="fade-left">
                    <span className='stroke-text'>why</span>
                    <span> choose us?</span>
                </div>

                <div className='reason-details'>
                    <div data-aos="fade-left">
                        <img src={tick} alt="tick-image11" />
                        <span>over 140+ expert coaches</span>
                    </div>
                    <div data-aos="fade-left">
                        <img src={tick} alt="tick-image11" />
                        <span>train smarter and faster than before</span>
                    </div>
                    <div data-aos="fade-left">
                        <img src={tick} alt="tick-image11" />
                        <span>1 free program for new member</span>
                    </div>
                    <div data-aos="fade-left">
                        <img src={tick} alt="tick-image11" />
                        <span>reliable partners</span>
                    </div>
                </div>

                <span data-aos="fade-left">our partners</span>
                <div className="partners" data-aos="fade-left">
                    <img src={adidas} alt="partners-logo" />
                    <img src={nb} alt="partners-logo" />
                    <img src={nike} alt="partners-logo" />
                </div>
            </div>
        </div>
    )
}

export default Reasons
