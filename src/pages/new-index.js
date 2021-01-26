import React from "react"

import Layout from "../components/layout"
import ArticleBlog from "../components/article"
import SEO from "../components/seo"

const NewIndex = () => (
  <Layout>
    <SEO title="Narcotica | El vicio es cultura" />
    <h1>New index</h1>
    <div className="container-fluid">
      <div className="row">
        <ArticleBlog></ArticleBlog>
      </div>
    </div>
  </Layout>
)

export default NewIndex
