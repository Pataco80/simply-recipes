import React from 'react'

// Import React Hooks

// Import Components Gatsby
import { StaticImage } from 'gatsby-plugin-image'

// Import Components for App
import Layout from '../components/Layout'

// Import styled-components, styledElements and helpers

// markup
const HomePage = ({ children }) => {
  return (
    <Layout>
      <main className='page'>
        <header className='hero'>
          <StaticImage
            src='../images/main.jpeg'
            alt='hero image'
            className='hero-img'
            placeholder='blurred'
            layout='fullWidth'
          />
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>Simply Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default HomePage
