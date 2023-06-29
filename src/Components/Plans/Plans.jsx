import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="plans-heading">
                <span className='stroke-text'>ready to</span>
                <span>start</span>
                <span className='stroke-text'>your journey with us</span>
            </div>

            <div className="plans-category">
                {
                    plansData.map((plan, index) => {
                        return <div className="plan-card" key={index}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>Rs. {plan.price}</span>

                            <div className="plan-features">
                                {
                                    plan.features.map((feature, ind) => {
                                        return <div key={ind} className='feature'>
                                            <img src={whiteTick} alt="" />
                                            <span>{feature}</span>
                                        </div>
                                    })
                                }
                            </div>
                            
                            <span>see more benifits -- </span>
                            <button className='btn'>subscribe now </button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Plans
