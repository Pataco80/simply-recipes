import React from 'react'

// Import Hooks files

// Import Components for App
import Layout from '../components/Layout'

// Import styled-components, styledElements and helpers

// markup
const contactPage = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want To Get In Touch ?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' name='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>Your email</label>
                <input type='email' id='email' name='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Your Message</label>
                <textarea id='message' name='message'></textarea>
              </div>
              <button className='btn block'>Send mail</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default contactPage
