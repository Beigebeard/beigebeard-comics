import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Header.scss';
import Search from '../Search/Search';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import ScriptTag from 'react-script-tag';


const Header = () => (
  <StaticQuery
  query={graphql`
  query SearchTestIndexQuery {
    siteSearchIndex {
      index
    }
  }
`}
  render={data => (
    <header>
      <Navbar border="dark" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href={'/'} style={{fontSize:"22px",marginLeft:"10px"}}>K<span style={{color:"white"}}>OGANUSAN</span> C<span style={{color:"white"}}>HRONICLES_</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto shadow-none" >
          <Nav.Link href={'/about'} style={{fontSize:"18px"}}>A<span style={{color:"white"}}>BOUT</span></Nav.Link>
          <Nav.Link href={'/archive'} style={{fontSize:"18px", paddingRight:"36px"}}>A<span style={{color:"white"}}>RCHIVE</span></Nav.Link>
          <div style={{display: "block", marginLeft:"auto", marginRight:"auto", marginTop:"auto", marginBottom:"auto"}}>
          <iframe src="https://www.patreon.com/platform/iframe?widget=become-patron-button&amp;redirectURI=http%3A%2F%2Flocalhost%3A8000%2Fcomic%2Fcomic1%2F&amp;creatorID=46703742" scrolling="no" allowtransparency="false" frameborder="0" class="patreon-widget" title="Patreon Widget" style={{display: "block", position: "static", visibility: "visible", width: "176px", height: "34px", fontFamily: "Courier"}}></iframe>
          </div>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
        
  </header>
  )}
  />
);
export default Header;

//<p style={{color:"white",fontSize:"1.2rem"}}>A Dwarf Fortress Webcomic</p>
//<span style={{color:"white"}}>A Dwarf Fortress Webcomic</span>