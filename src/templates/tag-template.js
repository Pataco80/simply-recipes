import React from 'react'

// Import Components Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

// Import styled-components, styledElements and helpers

// GraphQl Queries
export const query = graphql`
  query getTagRecipes($tag: String!) {
    recipes: allContentfulRecipes(
      sort: { fields: createdAt, order: DESC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
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

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.recipes.nodes
  const tagName = pageContext.tag
  return (
    <Layout>
      <Seo title={tagName} description={` All Recipes for ${tagName}`} />
      <main className='page'>
        <h3>{tagName}</h3>
        <div>
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export default TagTemplate
