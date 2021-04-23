import React from 'react'
import slugify from 'slugify'

// Import Components Gatsby
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import Components for App
import Layout from '../components/Layout'
import { BsClock, BsClockHistory, BsPeopleFill } from 'react-icons/bs'

// GraphQl Queries
export const query = graphql`
  query getSingleRecipe($title: String!) {
    recipe: contentfulRecipes(title: { eq: $title }) {
      id
      title
      description {
        description
      }
      prepTime
      cookTime
      serving
      image {
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
      content {
        tags
        ingredients
        tools
        instructions
      }
    }
  }
`
// markup

const RecipeTemplate = ({ data }) => {
  const {
    title,
    prepTime,
    cookTime,
    serving,
    description: { description },
    image,
    content,
  } = data.recipe
  const { tags, ingredients, tools, instructions } = content
  const imagePath = getImage(image)
  return (
    <Layout>
      <main className='page'>
        <div className='recipe-page'>
          <section className='recipe-hero'>
            <GatsbyImage
              image={imagePath}
              alt={image.title}
              className='about-img'
            />
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>{description}</p>
              <section className='recipe-icons'>
                <div>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min</p>
                </div>
                <div>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min</p>
                </div>
                <div>
                  <BsPeopleFill />
                  <h5>Serving</h5>
                  <p>{serving} pers.</p>
                </div>
              </section>
              <p className='recipe-tags'>
                Tags:{' '}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link key={index} to={`/tags/${slug}`}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className='recipe-content'>
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div Key={index} className='single-instruction'>
                    <header>
                      <p>Step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className='second-column'>
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p Key={index} className='single-ingredient'>
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p Key={index} className='single-tool'>
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default RecipeTemplate
