import React from 'react'
import { graphql, useStaticQuery, } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from '../utils/richTextOptions'
import { MDBContainer } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PoliciesPage = () => {
  const renderContent = (data) => {
    let options = getOptions()

    let content = data.nodes.map((node) => {
      return (
        <div key={node.id}>
          <h1>{node.policyTitle}</h1>
          {documentToReactComponents(node.policyBody.json, options)}
        </div>
      )
    })
    return content
  }

  const data = useStaticQuery(graphql`
    query {
    	allContentfulPoliciesPageContentBlock (
        sort: {
            fields: appearanceInTab,
            order: ASC
          }
      ) {
        nodes {
          id
          policyTitle
          policyBody {
            json
          }
        }
      }
    }
  `)

  let content = renderContent(data.allContentfulPoliciesPageContentBlock)

  return (
    <Layout>
      <SEO title="Policies" />
      <MDBContainer id="policies">
        { content }
      </MDBContainer>
    </Layout>
  )
}

export default PoliciesPage
