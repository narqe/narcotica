import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Navbar = ({some}) => {
    const info = useStaticQuery(graphql`
    query getAllPages {
        allSitePage(sort: {order: ASC, fields: id}, filter: {}) {
        nodes {
            path,
        }
        }
    } 
    `)

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    {info.allSitePage.nodes.map(
                        el => <Link className="nav-item nav-link" to={el.path}>{el.path}</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
