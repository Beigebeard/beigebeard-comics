import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

class TitleBar extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
        
        const {previous, next, start, end, post} = this.props;

        return (
        <div className="post-footer">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              listStyle: 'none',
              padding: 0,
              marginBottom: "18px",
              marginTop: "0px",
            }}>
              {start && (<Link to={start.fields.slug} rel="start" style={{paddingRight: "36px", color:"#0f0",fontSize:"18px", fontFamily: "Courier"}}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} style={{verticalAlign: "-4px"}}/><span style={{color:"#fff"}}>START</span>
                </Link>)}
              {previous && (
                <Link to={previous.fields.slug} rel="prev" style={{paddingRight: "90px", color:"#0f0",fontSize:"18px", fontFamily: "Courier"}}>
                  <FontAwesomeIcon icon={faAngleLeft} style={{verticalAlign: "-4px"}}/><span style={{color:"#fff"}}>PREV</span>
                </Link>)}
            <div className="article">
            <p className="subtitle">
            <span style={{color:"#0f0"}}> {post.frontmatter.title}</span>
              {/*&nbsp;•&nbsp;*/}
              &nbsp;
              {post.frontmatter.date}
              
            </p>
            </div>
            
              {next && (
                <Link to={next.fields.slug} rel="next" style={{paddingLeft: "90px", color:"#0f0",fontSize:"18px", fontFamily: "Courier"}}>
                  <span style={{color:"#fff"}} >NEXT</span><FontAwesomeIcon icon={faAngleRight} style={{verticalAlign: "-4px"}}/>
                </Link>
              )}
              {end && (
                <Link to="/" rel="end" style={{paddingLeft: "36px", color:"#0f0",fontSize:"18px", fontFamily: "Courier"}}>
                  <span style={{color:"#fff"}}>END</span><FontAwesomeIcon icon={faAngleDoubleRight} style={{verticalAlign: "-4px"}}/>
                </Link>
              )}
          </ul>
        </div>
        )
    }
}    

export default TitleBar;
