import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import _ from 'lodash';
import Img from "gatsby-image"
import {Card} from 'react-bootstrap';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import TitleBar from '../components/TitleBar/TitleBar';

class BlogIndex extends React.Component {
  render() {
    const posts = _.get(this, 'props.data.allMarkdownRemark.edges');
    
    const previous = posts[1].node;
    const next = posts[0].node
    const start = posts[posts.length-1].node
    const end = posts[0].node

    return (
      <Layout>
      <SEO 
        title={posts[0].node.frontmatter.title}
        description={posts[0].node.frontmatter.spoiler}
        slug={posts[0].node.fields.slug}
      />
          <TitleBar previous={previous} next={next} start={start} end={end} post={posts[0].node}/>
          <article dangerouslySetInnerHTML={{ __html: posts[0].node.html}} />
          <TitleBar previous={previous} next={next} start={start} end={end} post={posts[0].node}/>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {title: {ne: "About"}}}) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            spoiler
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
