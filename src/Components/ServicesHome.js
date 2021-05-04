import React from 'react'
import { Link } from "react-router-dom";
import './ServicesHome.css'

export default function ServicesHome() {
    return (
        <div id='servicez' className='service-container'>
            <p className='os'>OUR SERVICES</p>
            <hr className='title-underline' />
            <div className='landscapes'>
                <img className='services-image' src="Images/landscapes3.jpg" alt="" />
                <div>
                    <h1 className='services-title'>LANDSCAPES</h1>
                    <p className='services-subtitle'>PRECISION CRAFTED</p>
                    <p className='services-div'>We specialize in quality, low maintenance landscapes for your home or business that are designed to fit your personal style</p>
                    <Link className='lm-link' to='/landscaping'>
                        <p className='learn-more'>LEARN MORE</p>
                    </Link>
                </div>
            </div>
            <div className='hardscapes'>
                <img className='services-image-h' src="Images/hardscape42.jpeg" alt="" />
                <div>
                    <h1 className='services-title'>HARDSCAPES</h1>
                    <p className='services-subtitle'>BUILT TO LAST</p>
                    <p className='services-div'>Custom hardscapes can allow you to expand your entertainment space outdoors. We specialize in custom hardscape design and installations.</p>
                    <Link className='lm-link' to='/hardscaping'>
                        <p className='learn-more'>LEARN MORE</p>
                    </Link>
                </div>
            </div>
            <div className='maintenace'>
                <img className='services-image' src="Images/lawncare.jpeg" alt="" />
                <div>
                    <h1 className='services-title'>MAINTENACE</h1>
                    <p className='services-subtitle'>BEAUTIFUL YARDS</p>
                    <p className='services-div'>We offer maintenance packages that keep your property looking fresh and clean</p>
                    <Link className='lm-link' to='/maintenence'>
                        <p className='learn-more'>LEARN MORE</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
