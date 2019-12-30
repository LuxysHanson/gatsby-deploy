import React from "react"
import { genericHashLink } from 'react-router-hash-link';
import GatsbyLink from 'gatsby-link';
import { useStaticQuery, graphql } from "gatsby"
import Image from "react-image"

const HashLink = (props) => genericHashLink(props, GatsbyLink);

const Portfolio = () => {

    const data = useStaticQuery(graphql`
       query Portfolio {
         wordPress {
          portfolies(where: {orderby: {field: DATE, order: ASC}}) {
            edges {
              node {
                id
                title
                featuredImage {
                  altText
                  sourceUrl
                }
                terms {
                  ... on WPGraphQL_PortfolioType {
                    slug
                  }
                }
              }
            }
          }
          portfolioTypes(where: {orderby: TERM_ID}) {
            edges {
              node {
                slug
                name
                termTaxonomyId
              }
            }
          }
         }
       }
  `)

    return (
        <section id="portfolio" className="portfolio pd-section">
            <div className="container">
                <h3 className="title">Мое портфолио</h3>
                <p className="portfolio-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus
                    leo nec ornare diamcommodo nibh ante facilisis.</p>
                <ul className="portfolio-cat">
                    {data.wordPress.portfolioTypes.edges.map((item,i) => {
                        let is_active = (i > 0) ? '' : 'active',
                            filter = (item.node.slug === 'all') ? '*' : '.' + item.node.slug;
                        return (
                            <li key={item.node.termTaxonomyId} data-filter={filter} className={is_active}>{item.node.name}</li>
                        )
                    })}
                </ul>
                <div className="portfolio-lists isotope">
                    {data.wordPress.portfolies.edges.map((item, i) => {
                        let termsClass = (item.node.terms[0].slug) ? item.node.terms[0].slug  : '';
                        return (
                            <HashLink key={item.node.id} to="/#" className={'portfolio-item  isotope-item ' + termsClass}>
                                <figure className="portfolio-img">
                                    <Image src={item.node.featuredImage.sourceUrl} alt={item.node.featuredImage.altText} />
                                </figure>
                                <div className="portfolio-text">
                                    <span className="">{item.node.title}</span>
                                    <i className="fa fa-search"/>
                                </div>
                            </HashLink>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Portfolio