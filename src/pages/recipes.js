import React from 'react'

// Import React Hooks

// Import Components for App
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'

// Import styled-components, styledElements and helpers

// markup
const RecipesPage = () => {
  return (
    <Layout>
      <main className='page'>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default RecipesPage
