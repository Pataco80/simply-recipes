import React from 'react'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

// Import Components Gatsby
import { Link } from 'gatsby'
// Import Components for App

// Import styled-components

// markup
const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className='tag-container'>
      <h4>Recipes Tags</h4>
      <div className='tags-list'>
        {newTags.map((item, index) => {
          const [tag, value] = item
          const slug = slugify(tag, { lower: true })
          return (
            <Link Key={index} to={`/tags/${slug}`}>
              {tag} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
