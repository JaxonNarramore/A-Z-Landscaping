import React from 'react'
import './WCU.css'

export default function WCU() {
    return (
        <div className='wcu-container'>
            <p className='wcu-title'>WHY CHOOSE US?</p>
            <hr className='title-underline' />
            <div className='reason-container'>
                <div className='wcu'>
                    <img id='thinking' className='wcu-images' src="Images/thinking.png" alt="" />
                    <p className='wcu-txt'>
                        Your outdoor project may seem intimidating and overwhelming. Most people don’t have an idea where to start. No PROBLEM! We do everything from A-Z. Our #1 goal is to make this the easiest project you’ve ever done.
                    </p>
                </div>
                <hr className='divider' />
                <div className='wcu'>
                    <img className='wcu-images' src="Images/easy.png" alt="" />
                    <p className='wcu-txt'>
                        Once you contact us, we walk you through the entire process. Whether its a simple landscape cleanup, backyard renovation, or completely new outdoor area we’re here to make it as EASY as possible - all while providing a great design and quadivty installation. We make sure you’re left with a product that is STUNNING and built to last.
                    </p>
                </div>
                <hr className='divider' />
                <div className='wcu'>
                    <img className='wcu-images' src="Images/honest.png" alt="" />
                    <p className='wcu-txt'>
                        We can create your dream space. From the details of a 3-D design and the custom building process to the finished product, the experience is friendly, professional and honest.
                    </p>
                </div>
            </div>
        </div>
    )
}
