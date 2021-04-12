import React from 'react'
import Contact from './Contact.js'
import Header from './Header.js'
import ServicesHome from './ServicesHome.js'
import WCU from './WCU.js'
import Values from './Values.js'
import Projects from './Projects.js'

export default function Home() {
    return (
        <div>
            <Header />
            <WCU />
            <ServicesHome />
            <Values />
            {/* <Projects /> */}
            <Contact />
        </div>
    )
}
