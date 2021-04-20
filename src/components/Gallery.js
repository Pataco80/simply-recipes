import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const getImgGallery = graphql`
  {
    images: allFile(
      filter: { extension: { ne: "svg" }, sourceInstanceName: { eq: "images" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(getImgGallery)
  const imagesList = data.images.nodes
  console.log(imagesList)
  return (
    <section>
      <h2>Simple image gallery</h2>
      {imagesList.map((image, index) => {
        const { name } = image
        const imagePath = getImage(image)
        return (
          <article key={index}>
            <GatsbyImage image={imagePath} alt={name} />
            <p>{name}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Gallery
