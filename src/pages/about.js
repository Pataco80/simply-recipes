import React from 'react'

// Import React Hooks

// Import Components Gatsby
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// Import Components for App
import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

// GraphQl Queries
export const query = graphql`
  {
    recipes: allContentfulRecipes(
      sort: { fields: createdAt, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
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
const aboutPage = ({ data }) => {
  const recipes = data.recipes.nodes
  return (
    <Layout>
      <Seo title='About' description='About Simple Recipes' />
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to='/contact/' className='btn'>
              Contact
            </Link>
          </article>
          <StaticImage
            src='../images/about.jpg'
            alt='Person Pouring Salt in Bowl'
            className='about-img'
          />
        </section>
        <section className='featured-recipes'>
          <h5>Look At This Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export default aboutPage
