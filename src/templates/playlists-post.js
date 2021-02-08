import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const PlaylistsPageTemplate = (props) => {
  const post = props.data.markdownRemark;

  return (
    <Layout location={props.location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div
        className={`CustomPageTemplate CustomPageTemplate__Container ${
          post.frontmatter.aside
            ? 'CustomPageTemplate__WithAside'
            : 'CustomPageTemplate__WithoutAside'
        }`}
      >
        <div className="CustomPageTemplate__Title MainSection__Title">
            {post.frontmatter.title}
        </div>
        <div className="CustomPageTemplate__MainContainer">
          <div
              className="CustomPageTemplate__Main"
              dangerouslySetInnerHTML={{ __html: post.frontmatter.url }}
            />
        </div>
      </div>
    </Layout>
  );
};

export default PlaylistsPageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        url
      }
    }
  }
`;