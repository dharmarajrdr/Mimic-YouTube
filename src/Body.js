import React from 'react'
import SideNav from './SideNav'
import Main from './Main'
import './Body.css'

const Body = () => {
  return (
    <section id='body' className='FRSS'>
        <SideNav />
        <Main />
    </section>
  )
}

export default Body