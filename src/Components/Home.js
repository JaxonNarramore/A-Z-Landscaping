import React from 'react'
import Contact from './Contact.js'
import Header from './Header.js'
import ServicesHome from './ServicesHome.js'
import WCU from './WCU.js'
import Values from './Values.js'
import PopUp from './PopUp.js'
import Quote from './Quote.js'

export default function Home() {
    return (
        <div>
            <PopUp />
            <Header />
            <WCU />
            <ServicesHome />
            <Values />
            <Quote />
            <Contact />
        </div>
    )
}
