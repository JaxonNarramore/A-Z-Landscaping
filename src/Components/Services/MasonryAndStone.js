import React from 'react'

export default function MasonryAndStone() {
    return (
        <div className='service-container'>
            <div class="service-head">
                <p className='head2'>MASONRY & STONE</p>
                <hr className='divider' />
                {/* <p className='head-txt'>inset text here</p> */}
            </div>
            <div class="services4">
                <div class="col">
                    <p className='col-p'>Flower Bed Bordering</p>
                    <img className='service-img' src="Images/bordering.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Flower Bed Columns</p>
                    <img className='service-img' src="Images/columns.jpg" alt="" />
                </div>
                <div class="col">
                    <p className='col-p'>Mailboxes</p>
                    <img className='service-img' src="Images/mailbox.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
