import React from 'react'

// Import React Hooks

// Import Components for App
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import Seo from '../components/SEO'

// Import styled-components, styledElements and helpers

// markup
const RecipesPage = () => {
  return (
    <Layout>
      <Seo title='All Recipes' description='Viw all recipes' />
      <main className='page'>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default RecipesPage
