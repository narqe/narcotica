import React from "react"
import "./layout.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ArticleBlog = () => {
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
        <div className="col-4 card">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            <div className="card-body">
                <h1>Title</h1>
                <span>Subtitle</span>
                <p className="card-text">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
                <Link
                    to="/detail"
                    className="btn btn-sm btn-outline-secondary">Link
                </Link>
            </div>
        </div>
    )
}

export default ArticleBlog
