import React from 'react'
import setupTags from '../utils/setupTags'
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
          return (
            <Link Key={index} to={`/${tag}`}>
              {tag} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
