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
                    <img className='service-img' src="Images/shrub.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Tree Planting</p>
                    <img className='service-img' src="Images/plant.JPG" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Annual & Perennial Planting</p>
                    <img className='service-img' src="Images/annual.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Decorative Rock Installation</p>
                    <img className='service-img' src="Images/masonry24.jpg" alt="" />
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Mulch & Compost Installation</p>
                    <img className='service-img' src="Images/stonez.JPG" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Sod Installation</p>
                    <img className='service-img' src="Images/sod.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
