import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Header.scss';
import Search from '../Search/Search';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';


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
      <Navbar border="dark" bg="dark" expand="lg" variant="dark" className="customDark">
        <Navbar.Brand href={'/'} style={{fontSize:"20px"}}>K<span style={{color:"white"}}>oganusan</span> C<span style={{color:"white"}}>hronicles</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto shadow-none">
          <Nav.Link href={'/about'}>About</Nav.Link>
          <Nav.Link href={'/archive'}>Archive</Nav.Link>
          <Nav.Link href={'/rss.xml'}>RSS</Nav.Link>
          <Search searchIndex={data.siteSearchIndex.index}/>
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