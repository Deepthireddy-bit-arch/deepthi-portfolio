"use client"
import React from 'react'
import ProjectsPage from './ProjectPage'
import Navbar from '../components/nav/Navbar'
import FooterSection from '../footer/footerPage'

const page = () => {
  return (
    <div className='section-container'>
       
      <ProjectsPage/>
      <FooterSection/>
    </div>
  )
}

export default page
