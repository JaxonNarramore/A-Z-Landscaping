import React from 'react'
import './Services.css'

export default function Excavation() {
    return (
        <div className='service-container'>
            <div className='landscapehead'></div>
            <p className='landscape-txt'>EXCAVATION</p>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>EXCAVATION</p>
                {/* <p className='head-txt'>Need to write this</p> */}
            </div>
            <hr className='divider' />
            <div class="services">
                <div class="col">
                    <p className='col-p'>Grading</p>
                </div>
                <div class="col">
                    <p className='col-p'>Digging</p>
                </div>
                <div class="col">
                    <p className='col-p'>Soil Importing & Haul Away</p>
                </div>
                <div class="col">
                    <p className='col-p'>Pool & Storage Pads</p>
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Water & Eletric Line Trenching</p>
                </div>
                <div class="col">
                    <p className='col-p'>Driveway Installation & Extensions</p>
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
