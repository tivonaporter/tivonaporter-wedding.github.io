import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* header */}
    <div className="container" style={{
      textAlign: `center`,
      padding: `var(--paddinglarge) 0`,
    }}>
      <h5>May 15th, 2020</h5>
      <h1 style={{
        fontSize: `5rem`,
        marginTop: `2.5rem`,
        marginBottom: `2.5rem`,
      }}>Katie & Devon</h1>
      <p style={{
        fontSize: `1.5rem`,
      }}>We're getting married!</p>
    </div>

    {/* intro */}
    <div style={{
      textAlign: `center`,
      backgroundColor: `white`,
    }}>
      <div class="container narrow" style={{
        textAlign: `center`,
        padding: `var(--paddingnormal) 0`,
      }}>
        <p style={{
          fontFamily: `var(--headlinefont)`,
          fontWeight: `300`,
          fontSize: `2rem`,
          lineHeight: `2.5rem`,
          color: `var(--textcolorpink)`,
          marginBottom: `3rem`,
        }}>Katie and Devon joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.</p>
        <p style={{
          marginBottom: `0`,
        }}>We'll start with the ceremony followed by a cocktail hour and dinner. Dress code will be somewhere between business casual and black tie.</p>
      </div>
    </div>

    {/* details */}
    <div style={{
      textAlign: `center`,
    }}>
      <div class="container col-2" style={{
        textAlign: `center`,
        padding: `var(--paddingnormal) 0`,
      }}>
        <div>
          <h5>When</h5>
          <h2>May 15th, 2020</h2>
          <p style={{
            marginBottom: `.3rem`,
          }}>Ceremony: 4pm</p>
          <p style={{
            marginBottom: `.3rem`,
          }}>Cocktail Hour: 5pm – 6pm</p>
          <p style={{
            marginBottom: `.3rem`,
          }}>Dinner + Party: 6pm – 10pm</p>
        </div>
        <div>
          <h5>Where</h5>
          <h2>Podere Palazzo</h2>
          <p style={{
            marginBottom: `.3rem`,
          }}>01021 Acquapendente</p>
          <p style={{
            marginBottom: `.3rem`,
          }}>Province of Viterbo, Italy</p>
          <p style={{
            marginBottom: `.3rem`,
          }}>Shuttle Service Available</p>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
