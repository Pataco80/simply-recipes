import React from 'react'

// Import Components for App
import Footer from './Footer'
import Navbar from './Navbar'

// Import styles
import 'normalize.css'
import GlobalStyles from '../utils/GlobalStyles'
// Markup
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
