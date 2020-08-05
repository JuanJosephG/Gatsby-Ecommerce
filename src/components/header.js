import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MenuItem, StyledHeader } from "../styles/components"
import { CartContext } from "../context"

const Header = ({ siteTitle }) => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://images.ctfassets.net/w5x0nodf28dd/7LyBBZBKEsBJ2A5TgqKQEG/b540fe89242f3193da80e701e9239e56/logoPlant.png"
          alt="logoPlant"
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="https://www.gatsby.com">Gatsby</a>
          </MenuItem>
          <MenuItem margin>
            <Link to="/cart">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cartLogo"
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
