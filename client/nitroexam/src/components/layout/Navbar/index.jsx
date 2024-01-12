import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section id='navbar'>
      <div className='container'>
        <div className='navbox'>
          <div className='navleft'>
            <h2 className='ntr'>Nitro.</h2> 
          </div>

          <div className='navmid'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/test">Testimonilas</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/SignupForm">SignupForm</NavLink>

          </div>




        </div>





      </div>




    </section>
  )
}

export default Navbar