import React from 'react'

// Import Components Gatsby
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// Import Components for App

// Import styled-components

// markup
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className='recipes-list'>
      {recipes.map((recipe) => {
        const { id, title, prepTime, cookTime, image } = recipe
        const imagePath = getImage(image)
        return (
          <Link Key={id} to={`/${title}`} className='recipe'>
            <GatsbyImage
              image={imagePath}
              alt={image.title}
              className='recipe-img'
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
