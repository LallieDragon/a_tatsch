import React, { Component } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact"

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar dark expand="md" id="header">
        <MDBContainer className="py-5">
          <MDBNavbarBrand>
            <Link to="/" className="logo-placeholder">
              <h1>{this.props.siteTitle.toUpperCase()}</h1>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
