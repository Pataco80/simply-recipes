import React from 'react'

// Import React Hooks

// Import Components Gatsby
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// Import Components for App
import Layout from '../components/Layout'

// Import styled-components, styledElements and helpers

// markup
const aboutPage = () => {
  return (
    <Layout>
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
            src='../images/about.jpeg'
            alt='Person Pouring Salt in Bowl'
            className='about-img'
          />
        </section>
        <section>section two</section>
      </main>
    </Layout>
  )
}

export default aboutPage
