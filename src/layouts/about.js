import React from "react"
import {genericHashLink} from 'react-router-hash-link'
import GatsbyLink from 'gatsby-link'
import {useStaticQuery, graphql} from "gatsby"
import Image from "react-image"
import VisibilitySensor from 'react-visibility-sensor'

const HashLink = (props) => genericHashLink(props, GatsbyLink);

const About = () => {

    const data = useStaticQuery(graphql`
        query About {
           wordPress {
              pageBy(uri: "about-me") {
                title
                content
                pageId
                featuredImage {
                  altText
                  sourceUrl
                }
              }
          }
        }
  `)

    return (
        <section key={data.wordPress.pageBy.pageId} id="next" className="about pd-section">
            <div id="about" className="container">
                <h3 id="fixed-top" className="title">{data.wordPress.pageBy.title}</h3>
                <div className="about-body">
                    <div className="about-img">
                        <VisibilitySensor>
                            <Image src={data.wordPress.pageBy.featuredImage.sourceUrl} alt={data.wordPress.pageBy.featuredImage.altText}/>
                        </VisibilitySensor>
                    </div>
                    <div className="about-text" dangerouslySetInnerHTML={{__html: data.wordPress.pageBy.content}}/>
                    <HashLink to="/#" className="about-link">
                        <i className="fa fa-download"/>
                        Скачать резюме
                    </HashLink>
                </div>
            </div>
        </section>
    )
}

export default About