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
                    <img className='service-img' src="Images/patio.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Fire Pits</p>
                    <img className='service-img' src="Images/firepit.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Retaining/Seating Walls</p>
                    <img className='service-img' src="Images/retainingwall.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Walkways</p>
                    <img className='service-img' src="Images/walkway.jpg" alt="" />
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Custom Mailboxes</p>
                    <img className='service-img' src="Images/mailbox.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Custom Garden Walls</p>
                    <img className='service-img' src="Images/gardenwall.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
