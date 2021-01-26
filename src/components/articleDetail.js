import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleDetail = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `)
    return (
        <Layout>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            <h1>Title</h1>
            <span>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.  <br/>
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.  <br/>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Layout>
    )
}

export default ArticleDetail;
