import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import CodeStyler from '../_components/CodeStyler'

export default function page() {
  return (
    <section className='bg-black'>
      <Navbar/>
      <CodeStyler/>
      <Footer/>
    </section>
  )
}
