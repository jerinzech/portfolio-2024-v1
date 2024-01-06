import React from 'react'
import './HomePage.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


export default function HomePage() {
  return (
    <div className='main-view'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
