import React from 'react'
import AboutPage from './AboutPage'
import Navbar from '../components/nav/Navbar'
import FooterSection from '../footer/footerPage'

const page = () => {
  return (
    <div className='section-container'>

      <AboutPage />
      <FooterSection />
    </div>
  )
}

export default page
