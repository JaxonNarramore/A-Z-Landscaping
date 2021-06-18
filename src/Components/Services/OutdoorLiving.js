import React from 'react'

export default function OutdoorLiving() {
    return (
        <div className='service-container'>
            <div className='landscapehead'></div>
            <p className='landscape-txt'>OUTDOOR LIVING</p>
            <div class="service-head">
                <p id='outdoor-head' className='head2'>OUTDOOR LIVING</p>
                <p id='outdoor-p' className='head-txt'>The perfect way to extend your living space into the outdoors</p>
            </div>
            <hr className='divider' />
            <div class="services">
                <div class="col">
                    <p className='col-p'>Paver Patios</p>
                </div>
                <div class="col">
                    <p className='col-p'>Natural Flagstone Patios</p>
                </div>
                <div class="col">
                    <p className='col-p'>Wood Firepits & Fireplaces</p>
                </div>
                <div class="col">
                    <p className='col-p'>Gas Firepits & Fireplaces</p>
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