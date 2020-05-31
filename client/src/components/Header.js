import React, { Component } from "react";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      change: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.mainMenuScroll = this.mainMenuScroll.bind(this);
  }

  toggleNav() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.mainMenuScroll, false);
  }

  mainMenuScroll() {
    if (window.scrollY >= 40) {
      this.setState({ change: true });
    } else {
      this.setState({ change: false });
    }
  }

  render() {
    const { isOpen, change } = this.state;

    return (
      <>
        <Navbar
          color={change ? "dark" : ""}
          dark
          className='navigation'
          expand='md'
          fixed='top'
        >
          <NavbarToggler onClick={this.toggleNav} className='mr-1' />
          <NavbarBrand style={{ color: "white" }} href='/' className='mr-auto'>
            Portfolio
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#home-section'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#about-section'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#education-section'>Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#projects-section'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#skills-section'>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#certificates-section'>Certificates</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact-section'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
