import React from "react"
import { graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"
// import styled from "styled-components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      totalCount
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`
// const Button = styled.button`
//   width: 8rem;
//   background-color: #98ca3f;
//   border: none;
//   border-radius: 10px;
//   color: ${props => props.color};
//   &:hover {
//     transform: scale(1.8);
//   }
// `

const IndexPage = ({ data }) => (
  //
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripeSku.edges} />
  </>
)

export default IndexPage
