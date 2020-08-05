import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        con 
        <span role="img" aria-label="emoji">
          👷
        </span>
        de Plants Associate
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Content>
  </>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
