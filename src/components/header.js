import React, { useState } from "react"
import { graphql, useStaticQuery, } from "gatsby"
import Img from 'gatsby-image'

import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBCol,
} from "mdbreact"

const Header = () => {
  const [ isOpen, setOpen ] = useState(false)

  const data = useStaticQuery(graphql`
    query {
			contentfulHeaderContent {
        tabNames
        logo {
          description
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <MDBNavbar dark expand="md" id="header">
      <MDBContainer className="py-5">
        <MDBCol md="5" className="logo-column">
          <Link to="/" className="logo-placeholder">
            <Img
              fluid={data.contentfulHeaderContent.logo.fluid}
              alt={data.contentfulHeaderContent.logo.description.replace(/-/g, ' ').substring(2)}
              loading="eager"
            />
          </Link>
        </MDBCol>
        <MDBNavbarToggler onClick={(e) => setOpen(!isOpen)} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link className="nav-link" activeClassName="active" to="/">Home</Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className="nav-link" activeClassName="active" to="/services">Services</Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className="nav-link" activeClassName="active" to="/portfolio">Portfolio</Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className="nav-link" activeClassName="active" to="/policies">Policies</Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
          </MDBNavItem>
        </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}


export default Header
