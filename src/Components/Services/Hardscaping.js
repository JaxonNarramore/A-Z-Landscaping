import React from 'react'

export default function Hardscaping() {
    return (
        <div className='service-container'>
            <div className='landscapehead'></div>
            <p className='landscape-txt'>HARDSCAPING</p>
            <div class="service-head">
                <p className='head2'>HARDSCAPING SERVICES</p>
                <p id='hard-div' className='head-txt'>Custom hardscapes can allow you to expand your entertainment space outdoors. We specialize in custom hardscape design and installations. Whether you’re interested in a patio, fire pit, retaining/seating walls, or walkway we can get it done for you! </p>
            </div>
            <hr className='divider' />
            <div class="services">
                <div class="col">
                    <p className='col-p'>Patios</p>
                </div>
                <div class="col">
                    <p className='col-p'>Fire Pits</p>
                </div>
                <div class="col">
                    <p className='col-p'>Retaining/Seating Walls</p>
                </div>
                <div class="col">
                    <p className='col-p'>Walkways</p>
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Custom Mailboxes</p>
                </div>
                <div class="col">
                    <p className='col-p'>Custom Garden Walls</p>
                </div>
            </div>
            <div className="imgz">
                <div className='col-image'>
                    <img className='service-img' src="Images/driveway.JPG" alt="" />
                </div>
                <div className='col-image'>
                    <img className='service-img' src="Images/grading.jpg" alt="" />
                </div>
                <div className='col-image'>
                    <img className='service-img' src="Images/gas.jpg" alt="" />
                </div>
                <div className='col-image'>
                    <img className='service-img' src="Images/plant.jpeg" alt="" />
                </div>
            </div>
            <div className="imgz">
                <div className='col-image'>
                    <img className='service-img' src="Images/plant.jpeg" alt="" />
                </div>
                <div className='col-image'>
                    <img className='service-img' src="Images/gas.jpg" alt="" />
                </div>
                <div className='col-image'>
                    <img className='service-img' src="Images/grading.jpg" alt="" />
                </div>
                <div className='col-image'>
                    <img className='service-img' src="Images/driveway.JPG" alt="" />
                </div>
            </div>
        </div>
    )
}