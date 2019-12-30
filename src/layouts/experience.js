import React from "react"
import ReactWOW from 'react-wow'
import {graphql, useStaticQuery} from "gatsby";

const Experience = () => {

    const data = useStaticQuery(graphql`
      query Experiencies {
        wordPress {
          experiencies {
            edges {
              node {
                id
                title
                content
                experienciesField {
                  position
                  dateBefore
                  dateAfter
                }
              }
            }
          }
        }
      }
  `)

    return (
        <section className="experience pd-section">
            <div className="container">
                <h3 className="title wow fadeInUp">Опыт работы</h3>
                <ul className="timeline experience-line">
                    {data.wordPress.experiencies.edges.map((item, i) => {
                        let present = (i > 0) ? '' : 'present';
                        return (
                            <li key={item.node.id} className="ds-flex">
                                <div className="timeline-body">
                                    <div className="timeline-heading">
                                        <ReactWOW animation="fadeInUp" duration=".8s" delay=".0s">
                                            <h4>{item.node.title}</h4>
                                        </ReactWOW>
                                        <ReactWOW animation="fadeInUp" duration=".8s" delay=".4s">
                                            <span>{item.node.experienciesField.position}</span>
                                        </ReactWOW>
                                    </div>
                                    <ReactWOW animation="fadeInUp" duration=".8s" delay=".8s">
                                        <p dangerouslySetInnerHTML={{__html: item.node.content}}/>
                                    </ReactWOW>
                                </div>
                                <ReactWOW animation="fadeIn" duration=".6s">
                                    <div className="timeline-panel ds-flex-align">
                                        {item.node.experienciesField.dateBefore} <br/>
                                        - <br/>
                                        <span className={present}>{item.node.experienciesField.dateAfter}</span>
                                    </div>
                                </ReactWOW>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Experience