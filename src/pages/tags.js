import React from 'react'

// Import React Hooks
import setupTags from '../utils/setupTags'
// Import Components Gatsby
import { graphql, Link } from 'gatsby'

// Import Components for App
import Layout from '../components/Layout'

// Import styled-components, styledElements and helpers

// GraphQl Queries
export const query = graphql`
  {
    tags: allContentfulRecipes(sort: { fields: createdAt, order: DESC }) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
// markup
const TagsPage = ({ data }) => {
  const tagsList = data.tags.nodes
  const newTags = setupTags(tagsList)
  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((item, index) => {
            const [tag, value] = item
            return (
              <Link Key={index} to={`/${tag}`} className='tag'>
                <h5>{tag}</h5>
                <p>{value} recipie</p>
              </Link>
            )
          })}{' '}
        </section>
      </main>
    </Layout>
  )
}

export default TagsPage
