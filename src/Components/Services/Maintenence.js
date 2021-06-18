import React from 'react'

export default function Maintenence() {
    return (
        <div className='service-container'>
            <div className='landscapehead'></div>
            <p className='landscape-txt'>MAINTENENCE</p>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>MAINTENENCE</p>
                <p className='head-txt'>We offer maintenance packages that keep your property looking fresh and clean</p>
            </div>
            <hr className='divider' />
            <div class="services">
                <div class="col">
                    <p className='col-p'>Commercial Maintence Plans</p>
                </div>
                <div class="col">
                    <p className='col-p'>Residential Maintence Plans</p>
                </div>
                <div class="col">
                    <p className='col-p'>Bi-Weekly & Monthly Plans</p>
                </div>
                <div class="col">
                    <p className='col-p'>Seasonal Clean Ups</p>
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