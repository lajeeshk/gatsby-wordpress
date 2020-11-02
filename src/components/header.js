import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {Styled} from "theme-ui"
import { Grid,Box,Flex } from "@theme-ui/components"



import Nav from "./nav"

// const theme = {
//   colors: {
//     primary: 'hotpink'
//   }
// }


const Header = ({ siteTitle }) => (

  <header>
      <Flex style={{justifyContent:"space-between",borderBottom:"1px solid rgb(243, 238, 238)"}}>
        <Box>
          <h1 style={{margin:'0'}}>Lajeesh</h1>
        </Box>
        <Box><Nav />

      </Box>
    </Flex>

  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
