import React from 'react'
import Helmet from 'react-helmet'

import Nav from './nav'
//import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Nav />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
