import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from '../utils/richTextOptions'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {
  const [ focused, setFocused ] = useState()

  const renderContent = (node) => {
      return (
        <MDBCol size="auto" key={node.id} className="services-column">
          <ul className="list-unstyled list-group">
            <h1 className="list-group-item">{node.serviceCategory} Services</h1>
            {node.services.map((service) => {
              return <li className="list-group-item" key={service}>{service}</li>
            })}
          </ul>
        </MDBCol>
      )
  }

  const handleClick = (index) => {
    return setFocused(index)
  }

  const renderTabs = (nodes) => {
    let tabs = nodes.map((node, index) => {
      var style = ''

      if (focused === index) {
        style = 'focused'
      }
      return <MDBCol md="6" key={node.serviceCategory} className={`tab ${style}`} onClick={() => handleClick(index)}>{node.serviceCategory}</MDBCol>
    })

    return tabs
  }

  const renderDisclaimer = (data) => {
    let options = getOptions()

    return (
      <>
        {documentToReactComponents(data.body.json, options)}
      </>
    )
  }

  const data = useStaticQuery(graphql`
    query {
    	allContentfulServices (
        sort:{
          fields: serviceCategory
          order: ASC
        }
      ) {
        nodes {
          id
          serviceCategory
          services
        }
      }
      contentfulDisclaimer {
        title
        body {
          json
        }
      }
    }
  `)

  let tabs = renderTabs(data.allContentfulServices.nodes)

  if (focused !== undefined) {
    var content = renderContent(data.allContentfulServices.nodes[focused])
  }

  let disclaimer = renderDisclaimer(data.contentfulDisclaimer)

  return (
    <Layout>
      <SEO title="Services" />
      <MDBContainer id="services">
        <MDBRow around>{ tabs }</MDBRow>
        { content }
        { disclaimer }
      </MDBContainer>
    </Layout>
  )
}

export default ServicesPage
