import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import emailjs from 'emailjs-com';
import './Quote.css'


function About() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000);
    }, []);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jehhnpf', 'template_cfojvtk', e.target, 'user_JjjokygneXUjqq7WuOENs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='quote-div'>
                        <h3 className='rasdq'>Request A Free Quote</h3>
                        <form className="quote-form" onSubmit={sendEmail}>
                            <div class="firstlast">
                                <div className='input-div'>
                                    <label>First Name</label>
                                    <input className='input' type="text" name="firstName" />
                                </div>
                                <div className='input-div'>
                                    <label>Last Name</label>
                                    <input className='input' type="text" name="lastName" />
                                </div>
                            </div>
                            <div className='input-div'>
                                <label>Email</label>
                                <input id='email' className='input' type="email" name="email" />
                            </div>
                            <div class="vehiclelocation">
                                <div className='input-div'>
                                    <label>Vehicle</label>
                                    <input className='input' type="text" name="vehicle" />
                                </div>
                                <div className='input-div'>
                                    <label>Location</label>
                                    <input className='input' type="text" name="location" />
                                </div>
                            </div>
                            <div className='input-div'>
                                <label>Phone Number</label>
                                <input id='phone' className='input' type="number" name="phone" />
                            </div>
                            <div className='input-div'>
                                <label className='description-label'>Description Of Work</label>
                                <textarea id='description' className='input' name="description" />
                            </div>
                            <input className='btn btn-outline-primary' type="submit" value="Send" />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default About;

// import React from 'react'
// import './About.css'

// export default function About() {
//     return (
//         <div className='about-container'>
//             <div class="about-comp">
//                 <p className='abt-head'>ABOUT COMPANY</p>
//                 <hr className='divider' />
//                 <p className='first-p'>Founded in 2019, A-Z Landscape & Maintenance, LLC, is a family owned and operated commercial & residential landscape business serving central Texas and surrounding areas.</p>
//                 <p>A-Z strives to design, build, and maintain quality projects and services throughout our community, treating the customers we work with as we would want to be treated, leaving quality service and respect at their homes and businesses for years to come.</p>
//             </div>
//             <div class="about-owner">
//                 <p className='abt-head'>ABOUT OWNER</p>
//                 <hr className='divider' />
//                 <p className='first-p'>Alex Sanchez, owner, started out his journey early in middle school, mowing lawns on weekends with his father, during the school breaks and summers after graduating from high school he decided to start learning more about the landscape and hardscape business. After a couple years learning from different courses and mentors, he felt he was ready to take the next step and start a landscape business. The reason he decided to start his own business rather than working for a local business is because he saw a need for a company that was transparent and put the customer first. He knew with his attention to detail and quality craftsmanship that he could offer a service that would set A-Z apart from other businesses.</p>
//             </div>

//         </div>
//     )
// }
