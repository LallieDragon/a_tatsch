import React from 'react'
// import { graphql, useStaticQuery, } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => {
  // const renderContent = (data) => {
  //   let content = data.allContentfulServices.nodes.map((node) => {
  //     return (
  //       <div className={`${node.serviceCategory} service-category-container`} key={node.id}>
  //         <h1>{node.serviceCategory}</h1>
  //         <div className="service-lists-container">
  //           <div className="column service-names">
  //             <ol>
  //               {node.serviceNames.map((name, index) => {
  //                 return <li className={`${index}-hover list-item`} key={name}>{name}</li>
  //               })}
  //             </ol>
  //           </div>
  //           <div className="column service-prices">
  //             <ol>
  //               {node.servicePrice.map((price, index) => {
  //                 return <li className={`${index}-hover list-item`} key={index}>{price}</li>
  //               })}
  //             </ol>
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   })
  //   return content
  // }

  // const data = useStaticQuery(graphql`
  //   query {
  //   	allContentfulServices (
  //       sort: {
  //           fields: appearanceInTab,
  //           order: ASC
  //         }
  //     ) {
  //       nodes {
  //         id
  //         serviceCategory
  //         serviceNames
  //         servicePrice
  //       }
  //     }
  //   }
  // `)


  // let content = renderContent(data)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <div id="portfolio">
        PortfolioPage
      </div>
    </Layout>
  )
}

export default PortfolioPage
