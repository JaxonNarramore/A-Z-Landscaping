import React from 'react'

export default function Irrigation() {
    return (
        <div className='service-container'>
            <div class="service-head">
                <p className='head1'>COMMERCIAL AND RESIDENTIAL</p>
                <p className='head2'>IRRIGATION REPAIR SERVICES</p>
                <hr className='divider' />
                <p className='head-txt'>Inset text here</p>
            </div>
            <div class="services3">
                <div class="col">
                    <p className='col-p'>Broken Sprinkler Heads</p>
                    <img className='service-img' src="Images/patio.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Broken Pipes</p>
                    <img className='service-img' src="Images/firepit.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
