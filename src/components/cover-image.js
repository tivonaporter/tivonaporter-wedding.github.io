import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "seated-giggles.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} />
}

export default CoverImage
