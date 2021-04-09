import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className='about-container'>
            <div class="about-comp">
                <p className='abt-head'>ABOUT COMPANY</p>
                <hr className='divider' />
                <p className='first-p'>Founded in 2019, A-Z Landscape & Maintenance, LLC, is a family owned and operated commercial & residential landscape business serving central Texas and surrounding areas.</p>
                <p>A-Z strives to design, build, and maintain quality projects and services throughout our community, treating the customers we work with as we would want to be treated, leaving quality service and respect at their homes and businesses for years to come.</p>
            </div>
            <div class="about-owner">
                <p className='abt-head'>ABOUT OWNER</p>
                <hr className='divider' />
                <p className='first-p'>Alex Sanchez, owner, started out his journey early in middle school, mowing lawns on weekends with his father, during the school breaks and summers after graduating from high school he decided to start learning more about the landscape and hardscape business. After a couple years learning from different courses and mentors, he felt he was ready to take the next step and start a landscape business. The reason he decided to start his own business rather than working for a local business is because he saw a need for a company that was transparent and put the customer first. He knew with his attention to detail and quality craftsmanship that he could offer a service that would set A-Z apart from other businesses.</p>
            </div>

        </div>
    )
}
