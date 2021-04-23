import React from 'react'

// Import React Hooks

// Import Components Gatsby
import { StaticImage } from 'gatsby-plugin-image'

// Import Components for App
import Layout from '../components/Layout'
import Allrecipes from '../components/AllRecipes'
import Seo from '../components/SEO'

// Import styled-components, styledElements and helpers

// markup
const HomePage = () => {
  return (
    <Layout>
      <Seo title='Home' description='No Fluff, Just Recipes' />
      <main className='page'>
        <header className='hero'>
          <StaticImage
            src='../images/main.jpg'
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
        <Allrecipes />
      </main>
    </Layout>
  )
}

export default HomePage
