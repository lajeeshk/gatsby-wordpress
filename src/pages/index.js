import React from "react"
import { Link,graphql } from "gatsby"

import PropTypes from 'prop-types'
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import LatestBlogs from "../components/latest-blogs"
import PostList from "../components/PostList"

const IndexPage = ({data}) => {
  console.log(data);
  // const { data, pageContext } = data1
  const { edges: posts } = data.allWordpressPost

  const propTypes = {
    data: PropTypes.shape({
      allWordpressPost: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
    pageContext: PropTypes.shape({
      currentPage: PropTypes.number,
      numPages: PropTypes.number,
    }),
  }
  
  return (
  <Layout style={{fontFamliy:"system-ui,serif"}}>
    <SEO title="Home" />
    <Hero />
 
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    
    </div>

    <PostList posts={posts} title="Latest posts" />

  </Layout>
  )

}



 export const Query = graphql`
 query HomePageQuery {
  allWordpressPost(limit: 10, sort: {fields: date, order: DESC}) {
    edges {
      node {
        content
        date
        excerpt
        id
        slug
        author {
          slug
        }
      }
    }
  }
}

`

export default IndexPage
