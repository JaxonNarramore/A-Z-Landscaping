import React from 'react'

export default function Landscaping() {
    return (
        <div className='service-container'>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>LANDSCAPING SERVICES</p>
                <hr className='divider' />
                <p className='head-txt'>We specialize in Quality low maintenance landscapes for your home or business that are designed to fit your personal style.</p>
            </div>
            <div class="services">
                <div class="col">
                    <p className='col-p'>Shrub & Bush Planting</p>
                    <img className='service-img' src="Images/shrub.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Tree Planting</p>
                    <img className='service-img' src="Images/tree.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Annual & Perennial Planting</p>
                    <img className='service-img' src="Images/annual.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Decorative Rock Installation</p>
                    <img className='service-img' src="Images/rock.jpg" alt="" />
                </div>
            </div>
            <div class="services2">
                <div class="col">
                    <p className='col-p'>Mulch, Compost, & Dirt Installation</p>
                    <img className='service-img' src="Images/mulch.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Sod Installation</p>
                    <img className='service-img' src="Images/sod.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
