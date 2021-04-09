import React from 'react'

export default function OutdoorLiving() {
    return (
        <div className='service-container'>
            <div class="service-head">
                <p className='head2'>OUTDOOR LIVING</p>
                <hr className='divider' />
                <p className='head-txt'>The perfect way to extend your living space into the outdoors</p>
            </div>
            <div class="services">
                <div class="col">
                    <p className='col-p'>Paver Patios</p>
                    <img className='service-img' src="Images/paver.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Natural Flagstone Patios</p>
                    <img className='service-img' src="Images/flagstone.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Wood Firepits & Fireplaces</p>
                    <img className='service-img' src="Images/wood.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Gas Firepits & Fireplaces</p>
                    <img className='service-img' src="Images/gas.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
