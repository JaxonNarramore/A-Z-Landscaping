import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import emailjs from 'emailjs-com';
import './PopUp.css'


function PopUp() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 5000);
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
        <div className='whole-popup'>
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
                    <div className='quote-container'>
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
                                <select id='service' className='input' name="service" label="Swedish Cars">
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
                            <input id='modal-btn' className='btn btn-outline-dark' type="submit" value="Submit" />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PopUp;