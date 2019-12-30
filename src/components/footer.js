import React from "react"
import {genericHashLink} from 'react-router-hash-link';
import GatsbyLink from 'gatsby-link';
import {graphql, useStaticQuery} from "gatsby";

const HashLink = (props) => genericHashLink(props, GatsbyLink);

const Footer = () => {

    const data = useStaticQuery(graphql`
        query Footer {
           wordPress {
              pageBy(uri: "contacts") {
                title
                content
                pageId
                contactsField {
                  address01
                  address02
                  address03
                }
              }
          }
        }
  `)

    return (
        <footer id="contact" className="site-footer">
            <div className="contacts pd-section">
                <div className="container">
                    <h3 className="title">{data.wordPress.pageBy.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: data.wordPress.pageBy.content}}/>
                    <div className="contacts-wrap">
                        <ul className="menu-contacts">
                            <li>
                                <HashLink to="/#">
                                    <i className="fa fa-map-marker"/>
                                    {data.wordPress.pageBy.contactsField.address01}
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/#">
                                    <i className="fa fa-envelope-o"/>
                                    {data.wordPress.pageBy.contactsField.address02}
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/#">
                                    <i className="fa fa-phone"/>
                                    {data.wordPress.pageBy.contactsField.address03}
                                </HashLink>
                            </li>
                        </ul>
                        <div className="form-wrap">
                            <div className="fieldset">Оставьте сообщение</div>
                            <form name="form" className="contact-form">
                                <input type="text" className="input" placeholder="Name"/>
                                <input type="email" className="input" placeholder="Email"/>
                                <textarea className="textarea" placeholder="Message"/>
                                <input type="submit" className="submit" placeholder="Send"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright &copy; 2019 Ersan.
            </div>
        </footer>
    )
}

export default Footer