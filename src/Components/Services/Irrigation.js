import React from 'react'

export default function Irrigation() {
    return (
        <div className='service-container'>
            <div className='landscapehead'></div>
            <p className='landscape-txt'>IRRIGATION REPAIR</p>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>IRRIGATION REPAIR</p>
                {/* <p className='head-txt'>Inset text here</p> */}
            </div>
            <hr className='divider' />
            <div class="services">
                <div class="col">
                    <p className='col-p'>Broken Sprinkler Heads</p>
                </div>
                <div class="col">
                    <p className='col-p'>Broken Pipes</p>
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