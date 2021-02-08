import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Libros = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
      <Layout>
        <SEO title="Blog" />
        <div className="BlogPage BlogPage__Container container">
          <div className="BlogPage__MainContainer">
            <div className="BlogPage__Title MainSection__Title">Libros</div>
            <div className="BlogPage__Content row">
              {posts.map(({ node }) => (
                <Link
                  key={node.fields.slug}
                  to={node.fields.slug}
                  className="BlogPage__Content__Item col-4"
                >
                  {node.frontmatter.title}
  
                  <div className="BlogPage__Content__Item__Data">
                    <div className="BlogPage__Content__Item__Image">
                      <img
                        src={'../../'+node.frontmatter.image}
                        alt={node.frontmatter.title}
                      />
                    </div>
  
                    <div
                      className="BlogPage__Content__Item__Description"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                  <div className="BlogPage__Content__Item__Metadata">
                    <small>{node.frontmatter.date}</small>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  };

export default Libros;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, 
      filter: {
        frontmatter: {
          enabled: {eq: true}, 
          contentType: {eq: "blog-post"}, 
          category: {eq: "libros" }
        }
      }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            description
            image
            category
            author
            enabled
            path
          }
        }
      }
    }
  }
`;