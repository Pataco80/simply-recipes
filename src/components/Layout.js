import React from 'react'

// Import Components for App
import Footer from './Footer'
import Navbar from './Navbar'

// Import styles
import GlobalStyle from '../utils/GlobalStyles'
// Markup
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
