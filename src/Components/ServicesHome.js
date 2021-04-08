import React from 'react'
import './ServicesHome.css'

export default function ServicesHome() {
    return (
        <div className='service-container'>
            <p className='os'>OUR SERVICES</p>
            <div className='landscapes'>
                <div>
                    <h1 className='services-title'>LANDSCAPES</h1>
                    <p className='services-subtitle'>PRECISION CRAFTED</p>
                    <p className='services-div'>We specialize in quality, low maintenance landscapes for your home or business that are designed to fit your personal style</p>
                    <p className='learn-more'>LEARN MORE</p>
                </div>
                <img className='services-image' src="Images/landscape.jpg" alt="" />
            </div>
            <div className='hardscapes'>
                <img className='services-image-h' src="Images/hardscape.jpeg" alt="" />
                <div>
                    <h1 className='services-title'>HARDSCAPES</h1>
                    <p className='services-subtitle'>BUILT TO LAST</p>
                    <p className='services-div'>Custom hardscapes can allow you to expand your entertainment space outdoors. We specialize in custom hardscape design and installations.</p>
                    <p className='learn-more'>LEARN MORE</p>
                </div>
            </div>
            <div className='maintenace'>
                <div>
                    <h1 className='services-title'>MAINTENACE</h1>
                    <p className='services-subtitle'>BEAUTIFUL YARDS</p>
                    <p className='services-div'>We offer maintenance packages that keep your property looking fresh and clean</p>
                    <p className='learn-more'>LEARN MORE</p>
                </div>
                <img className='services-image' src="Images/lawncare.jpeg" alt="" />
            </div>
            <div className='ms-container'>
                <button id='more-services' type="button" class="btn btn-outline-dark">More Services</button>
            </div>
        </div>
    )
}
