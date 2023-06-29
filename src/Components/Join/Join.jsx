import React from 'react'
import './Join.css'

const Join = () => {
    return (
        <div className="join-container">
            <div className="left-join">
                <hr />

                <div>
                    <span className='stroke-text'>ready to</span>
                    <span>level up</span>
                </div>

                <div>
                    <span>your body</span>
                    <span className='stroke-text'>with us ?</span>
                </div>
            </div>

            <div className="right-join">
                <form action="">
                    <input type="email" placeholder='Enter Your E-mail Address' />
                    <button>Contact Me</button>
                </form>
            </div>
        </div>
    )
}

export default Join
