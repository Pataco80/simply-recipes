import React, { useState } from 'react'

// Import Components Gatsby
import { Link } from 'gatsby'

// Import Components for App
import logo from '../images/logo.svg'
import { TextAlignJustify } from '@styled-icons/fluentui-system-filled/TextAlignJustify'

// Import styled-components
import styled from 'styled-components'

// markup
const Navbar = () => {
  // variables
  const [show, setShow] = useState(false)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            <ToggleIcon />
          </button>
        </div>
        <div className={show ? `nav-links show-links` : `nav-links`}>
          <Link
            to='/'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to='/recipes/'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Recipes
          </Link>
          <Link
            to='/tags/'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            to='/about/'
            className='nav-link'
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <div className='nav-link contact-link'>
            <Link to='/contact/' className='btn'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const ToggleIcon = styled(TextAlignJustify)`
  height: auto;
  width: 1.5rem;
`

export default Navbar
