import React from 'react'
import ContactPage from './ContactPage'
import Navbar from '../components/nav/Navbar'
import FooterSection from '../footer/footerPage'

const page = () => {
  return (
    <div className='section-container'>
       
      <ContactPage/>
      <FooterSection/>
    </div>
  )
}

export default page

