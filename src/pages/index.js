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

  const renderTitle = (title) => {
    let titleArray = title.split(" ")

    return (
      <MDBRow className="title">
        {titleArray.map((word) => {
          return <h1 className="title-word" key={word}>{word}</h1>
        })}
      </MDBRow>
    )
  }


  let title = renderTitle(data.contentfulAboutPageContentBlock.blockTitle)

  return (
    <Layout>
      <SEO title="Home" />
      <MDBContainer id="index">
        <MDBRow>
          <MDBCol md="6">
            <Img
              fluid={data.contentfulAboutPageContentBlock.blockPhotos.fluid}
              alt={data.contentfulAboutPageContentBlock.blockPhotos.description.replace(/-/g, ' ').substring(2)}
              loading="eager"
            />
          </MDBCol>
          <MDBCol md="6">
            <h1>{title}</h1>
            {documentToReactComponents(data.contentfulAboutPageContentBlock.blockBody.json, options)}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default HomePage
