import React from 'react'

export default function MasonryAndStone() {
    return (
        <div className='service-container'>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>MAINTENENCE</p>
                <hr className='divider' />
                <p className='head-txt'>We offer maintenance packages that keep your property looking fresh and clean</p>
            </div>
            <div class="services">
                <div class="col">
                    <p className='col-p'>Commercial Maintence Plans</p>
                    <img className='service-img' src="Images/commercial.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Residential Maintence Plans</p>
                    <img className='service-img' src="Images/redidential.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Bi-Weekly & Monthly Plans</p>
                    <img className='service-img' src="Images/monthly.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Seasonal Clean Ups</p>
                    <img className='service-img' src="Images/seasonal.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
