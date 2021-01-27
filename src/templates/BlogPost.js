import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;

  return (
    <Layout location={props.location} title={post.frontmatter.title}>
      <SEO
        title={post.frontmatter.title || ''}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="BlogPostTemplate BlogPostTemplate__Container BlogPostTemplate__WithAside">
        <div className="BlogPostTemplate__Title MainSection__Title">
            {post.frontmatter.title}
        </div>
        <div className="BlogPostTemplate__MainContainer">
          <div className="BlogPostTemplate__Main">
            <div className="BlogPostTemplate__Main__Image">
              <img src={post.frontmatter.image} alt={post.frontmatter.title} />
            </div>

            <div
              className="BlogPostTemplate__Main__Excerpt"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
            />

            <div
              className="BlogPostTemplate__Main__Content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="BlogPostTemplate__Main__Footer">
              <div className="BlogPostTemplate__Main__Footer__Date">
                {post.frontmatter.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
  }
`;