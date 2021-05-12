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
            <div class="services3">
                <div class="col">
                    <p className='col-p'>Broken Sprinkler Heads</p>
                    <img className='service-img' src="Images/sprinkler.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Broken Pipes</p>
                    <img className='service-img' src="Images/pipes.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
