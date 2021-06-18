import React from 'react'

export default function Landscaping() {
    return (
        <div className='service-container'>
            <div className='landscapehead'></div>
            <p className='landscape-txt'>LANDSCAPING</p>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>LANDSCAPING SERVICES</p>
                <hr id='divider' />
                <p className='head-txt'>We specialize in quality, low maintenance landscapes for your home or business that are designed to fit your personal style.</p>
            </div>
            <hr className='divider' />
            <div class="services">
                <div class="col">
                    <p className='col-p'>Shrub & Bush Planting</p>
                </div>
                <div class="col">
                    <p className='col-p'>Tree Planting</p>
                </div>
                <div class="col">
                    <p className='col-p'>Annual & Perennial Planting</p>
                </div>
                <div class="col">
                    <p className='col-p'>Decorative Rock Installation</p>
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Mulch & Compost Installation</p>
                </div>
                <div class="col">
                    <p className='col-p'>Sod Installation</p>
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
