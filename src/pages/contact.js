import React from 'react'
import { graphql, useStaticQuery, } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from '../utils/richTextOptions'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
 } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  let options = getOptions()

  const data = useStaticQuery(graphql`
    query {
      contentfulContactInformation {
        pageTitle
        writtenAddress {
          json
        }
        phoneNumber
        facebookLink
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

  let title = renderTitle(data.contentfulContactInformation.pageTitle)

  return (
    <Layout>
      <SEO title="Contact" />
      <MDBContainer id="contact">
        <MDBRow>
          <MDBCol md="6">
            <iframe
              title="gMap"
              className="iframe"
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYUVrLsZdW4YR-EGBatRQGls&key=${process.env.GATSBY_APP_GOOGLE_MAPS_EMBED_API_KEY}`}
              allowFullScreen
              >
            </iframe>
          </MDBCol>
          <MDBCol md="6">
            <h1>{title}</h1>
            <div>
              <p>We are located at</p>
              {documentToReactComponents(data.contentfulContactInformation.writtenAddress.json, options)}
            </div>

            <MDBRow>
              <a href={`tel:${data.contentfulContactInformation.phoneNumber}`}>
                <MDBBtn size="md" color="green">
                  <MDBIcon icon="fa fa-phone" size="2x" />
                </MDBBtn>
                Call or text us at {data.contentfulContactInformation.phoneNumber}
              </a>
            </MDBRow>

            <MDBRow>
              <a target="_blank" rel="noopener noreferrer" href={data.contentfulContactInformation.facebookLink}>
                <MDBBtn size="md" color="indigo">
                  <MDBIcon fab icon="facebook-f"  size="2x" />
                </MDBBtn>
                Follow us on Facebook!
              </a>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default ContactPage
