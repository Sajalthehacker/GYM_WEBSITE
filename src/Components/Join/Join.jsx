import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lpmgluc', 'template_bikxvfr', form.current, '-ledX2JYq77ufR-5X')
            .then((result) => {
                console.log(result.text);
                alert('we will receive your response and will call you later ')
            }, (error) => {
                console.log(error.text);
            });
    };
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
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" id="" placeholder='Enter Your Name' />
                    <input type="email" placeholder='Enter Your E-mail Address' name="user_email" />
                    <button>Contact Me</button>
                </form>
            </div>
        </div>
    )
}

export default Join
