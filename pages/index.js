import Navbar from '@/components/global/Navbar'
import HeroSection from '@/components/pages/home/HeroSection'
import Section from '@/components/pages/home/Section'
import Courses from '@/components/pages/home/Courses'
import React from 'react'
import PilarsOfIslam from '@/components/pages/home/PilarsOfIslam'
import Quotes from '@/components/pages/home/Quotes'
import Works from '@/components/pages/home/Works'
import Footer from '@/components/global/Footer'
import FAQS from '@/components/pages/home/FAQS'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section />
      <Courses />
      <Quotes />
      <Works />
      <PilarsOfIslam />
      <FAQS />
      <Footer />
    </div>
  )
}

export default HomePage
