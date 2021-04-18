import React from 'react'

// Import React Hooks

// Import Components for App
import Layout from '../components/Layout'

// Import styled-components, styledElements and helpers

// markup
const ErrorPage = () => {
  return (
    <Layout>
      <main className='error-page'>
        <section>
          <h1>404</h1>
          <h3>Page Not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default ErrorPage
