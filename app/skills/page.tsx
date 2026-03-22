"use client"
import React from 'react'
import SkillsSection from './SkillsSection'
import Navbar from '../components/nav/Navbar'
import FooterSection from '../footer/footerPage'

const page = () => {
    return (
        <div className='section-container'>
           
            <SkillsSection />
            <FooterSection/>
        </div>
    )
}

export default page

