import React from "react"
import {graphql, useStaticQuery} from "gatsby";

const Skills = () => {

    const data = useStaticQuery(graphql`
      query Skills {
        wordPress {
          skills(where: {orderby: {field: DATE, order: ASC}}) {
            edges {
              node {
                id
                title
                skillsField {
                  skillsLevel
                }
              }
            }
          }
        }
      }
  `)

    return (
        <section id="skills" className="skills pd-section">
            <div className="container">
                <h3 className="title">Мои навыки</h3>
                <div className="skills-items">
                    {data.wordPress.skills.edges.map((item, i) => {
                        return (
                            <article key={item.node.id} className="skill-item">
                                <span className="chart" data-percent={item.node.skillsField.skillsLevel}>
                                    <span className="percent"/>
                                </span>
                                <h4 className="subtitle">{item.node.title}</h4>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills