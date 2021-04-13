import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Header.css'
import Quote from './Quote'

export default function Header() {
    return (
        <div class="header-container">
            <div className='whole-caro'>
                <div>
                    <Carousel fade={true} controls={false} className='carousel' indicators={false}>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/hardscape2.jpeg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/idk.jpeg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/masonry10.JPG"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 carousel-image"
                                src="Images/masonry25.JPG"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div class="header-wordz">
                <div className='txt-div'>
                    <p className='header-txt'>A-Z LANDSCAPE</p>
                    <p className='header-txt'>& MAINTENENCE</p>
                    <p className='sub-header'>AUSTIN AREA COMMERCIAL AND RESIDENTIAL LANDSCAPING</p>
                    <div className='header-buttons'>
                        <button type="button" class="btn btn-outline-light">Get A Quote</button>
                        <button type="button" class="btn btn-outline-light">Our Services</button>
                    </div>
                </div>
                <div className='quote-div'>
                </div>
            </div>
        </div>
    )
}