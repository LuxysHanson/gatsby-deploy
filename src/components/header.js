import PropTypes from "prop-types"
import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"

const Header = ({siteTitle}) => {

    const data = useStaticQuery(graphql`
        query Header {
          wordPress {
            menus {
              edges {
                node {
                  menuItems {
                    edges {
                      node {
                        label
                        url
                        menuItemId
                      }
                    }
                  }
                }
              }
            }
          }
          file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
   `)

   return (
        <header className="site-header">
            <nav className="container site-nav">
                <Link to="/" className="nav-header">
                    <Img
                        fluid={data.file.childImageSharp.fluid}
                        alt="logo-header"
                    />
                </Link>
                <ul className="nav-menu">
                    {data.wordPress.menus.edges[0].node.menuItems.edges.map((menuItem, i) => (
                        <li key={menuItem.node.menuItemId.toString()}>
                            <Link activeClass="active" to={menuItem.node.url.slice(1)} spy={true} smooth={true} offset={-70} duration={600}>{menuItem.node.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
   )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header