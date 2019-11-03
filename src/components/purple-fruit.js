import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const PurpleFruit = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "purple-fruit.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.image.childImageSharp.fixed} />
}

export default PurpleFruit
