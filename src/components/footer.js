import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from '../utils/richTextOptions'
import { graphql, useStaticQuery, } from "gatsby"
import { Link } from "gatsby"

import {
  MDBContainer,
  MDBFooter,
 } from "mdbreact"

const Footer = () => {
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

  return (
    <MDBFooter id="footer" className="font-small mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <div className="d-flex flex-row flex-wrap justify-content-center align-content-center">
          <Link to="/contact" className="d-flex flex-wrap address-link">
            {documentToReactComponents(data.contentfulContactInformation.writtenAddress.json, options)}
          </Link>
          <a className="phone-link" href={`tel:${data.contentfulContactInformation.phoneNumber}`}>
            <p>{data.contentfulContactInformation.phoneNumber}</p>
          </a>
        </div>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
           <a href="https://linkedin.com/in/carrington-simecheck">&copy; {new Date().getFullYear()} Copyright</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
