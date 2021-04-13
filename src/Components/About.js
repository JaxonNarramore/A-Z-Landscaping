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
                size='lg'
                show={show}
                onHide={() => setShow(false)}
                centered={true}
            >
                <Modal.Header closeButton={true} closeLabel=''>
                    <Modal.Title as='modal-title'>
                        Request A Free Quote
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='quote-div'>
                        <form className="quote-form" onSubmit={sendEmail}>
                            <div class="firstlast">
                                <div className='input-div'>
                                    <label className='lbl'>First Name</label>
                                    <input id='first' className='input' type="text" name="firstName" />
                                </div>
                                <div className='input-div'>
                                    <label className='lbl'>Last Name</label>
                                    <input id='last' className='input' type="text" name="lastName" />
                                </div>
                            </div>
                            <div className='input-div'>
                                <label className='lbl'>Email</label>
                                <input id='email' className='input' type="email" name="email" />
                            </div>
                            <div className='input-div'>
                                <label className='lbl'>Service</label>
                                <select id='email' className='input' name="service" label="Swedish Cars">
                                    <option disabled selected value> -- Select An Service -- </option>
                                    <option value="landscaping">Landscaping</option>
                                    <option value="hardscaping">Hardscaping</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Masonry">Masonry & Stone</option>
                                    <option value="Outdoorliving">Outdoor Living</option>
                                    <option value="Irrigation">Irrigation</option>
                                    <option value="Excavation">Excavation</option>
                                </select>
                            </div>
                            <div className='input-div'>
                                <label className='lbl'>Phone Number</label>
                                <input id='phone' className='input' type="text" name="phone" />
                            </div>
                            <div className='input-div'>
                                <label className='lbl'>Description Of Project</label>
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
