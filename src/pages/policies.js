import React from 'react'
import { graphql, useStaticQuery, } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getOptions } from '../utils/richTextOptions'
import { MDBContainer, MDBRow } from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PoliciesPage = () => {
  const renderContent = (data) => {
    let options = getOptions()

    let content = data.nodes.map((node) => {
      let title = renderTitle(node.policyTitle)

      return (
        <div key={node.id}>
          <h1>{title}</h1>
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

  const renderTitle = (title) => {
    let titleArray = title.split(" ")

    return (
      <MDBRow center className="title">
        {titleArray.map((word) => {
          return <h1 className="title-word" key={word}>{word}</h1>
        })}
      </MDBRow>
    )
  }

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
