/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Layout as StyledLayout, Main,Container} from "theme-ui"
import Header from "./header"
//import { ThemeProvider } from 'emotion-theming'
import { ThemeProvider, ColorMode } from 'theme-ui'

//import theme from "../components/gatsby-plugin-theme-ui/index"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

	<StyledLayout>
	    <Container>
	      <Header siteTitle={data.site.siteMetadata.title} />
	      <div

	      >
	        <main>{children}</main>
	        <footer>
	          © {new Date().getFullYear()}, Built with
	          {` `}
	          <a href="https://www.gatsbyjs.org">Gatsby js</a>
	        </footer>
	      </div>
	    </Container>
    </StyledLayout>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
