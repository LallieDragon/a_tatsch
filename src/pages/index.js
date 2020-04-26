import React from "react"
import { graphql, useStaticQuery, } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from '../utils/richTextOptions'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => {
  let options = getOptions()

  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPageContentBlock {
        blockTitle
        blockBody {
          json
        }
        blockPhotos {
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <MDBContainer id="home">
        <MDBRow>
          <MDBCol md="6">
            <Img
              fluid={data.contentfulAboutPageContentBlock.blockPhotos.fluid}
              alt={data.contentfulAboutPageContentBlock.blockPhotos.description.replace(/-/g, ' ').substring(2)}
              loading="eager"
            />
          </MDBCol>
          <MDBCol md="6">
            <h1>{data.contentfulAboutPageContentBlock.blockTitle}</h1>
            {documentToReactComponents(data.contentfulAboutPageContentBlock.blockBody.json, options)}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default HomePage
