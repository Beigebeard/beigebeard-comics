import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import TitleBar from '../components/TitleBar/TitleBar';

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const post = this.props.data.markdownRemark;
    const {previous, next, start, end} = this.props.pageContext;
    return (
      <Layout>
        <SEO 
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
       <TitleBar previous={previous} next={next} start={start} end={end} post={post}/>
       <article dangerouslySetInnerHTML={{ __html: post.html}} />
       <TitleBar previous={previous} next={next} start={start} end={end} post={post}/>

      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        spoiler
        path
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
