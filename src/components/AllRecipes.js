import React from 'react'

// Import Components Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Components for App
import RecipesList from './RecipesList'
import TagsList from './TagsList'

// Import styled-components

// GraphQl Queries
export const getRecipes = graphql`
  {
    recipes: allContentfulRecipes(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          title
          gatsbyImageData(
            formats: WEBP
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  }
`

// markup
const Allrecipes = () => {
  const data = useStaticQuery(getRecipes)
  const recipes = data.recipes.nodes
  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default Allrecipes
