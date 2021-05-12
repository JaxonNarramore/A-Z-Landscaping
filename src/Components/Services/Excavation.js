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
                    <img className='service-img' src="Images/grading.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Digging</p>
                    <img className='service-img' src="Images/digging.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Soil Importing & Haul Away</p>
                    <img className='service-img' src="Images/soil.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Pool & Storage Pads</p>
                    <img className='service-img' src="Images/pool.jpg" alt="" />
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Water & Eletric Line Trenching</p>
                    <img className='service-img' src="Images/trenching.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Driveway Installation & Extensions</p>
                    <img className='service-img' src="Images/driveway.JPG" alt="" />
                </div>
            </div>
        </div>
    )
}
