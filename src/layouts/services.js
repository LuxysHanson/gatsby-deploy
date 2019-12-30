import React from "react"
import ReactWOW from "react-wow"
import {graphql, useStaticQuery} from "gatsby";

const Services = () => {

    let count = 0,
        serviceClass = [
            'fa-laptop',
            'fa-code',
            'fa-rocket',
            'fa-bullhorn'
        ];

    const data = useStaticQuery(graphql`
        query Services {
          wordPress {
            services(where: {orderby: {order: ASC, field: DATE}}) {
              edges {
                node {
                  title
                  content
                  id
                }
              }
            }
          }
        }
   `)

    return (
        <section id="services" className="services pd-section">
            <div className="container">
                <ReactWOW animation="fadeInUp" duration=".8s" delay=".0s">
                    <h3 className="title">Мои услуги</h3>
                </ReactWOW>
                <div className="services-items">
                    {data.wordPress.services.edges.map((item, i) => {
                        let counter = null,
                            classes = 'fa ' + serviceClass[i];

                        (count > 10) ? counter = count/10 + 's' : counter = '.' + count + 's';
                        count +=4;
                        return (
                            <ReactWOW key={item.node.id} animation="fadeInUp" duration=".8s" delay={counter}>
                                <article className="services-item">
                                    <i className={classes}/>
                                    <h4 className="subtitle">{item.node.title}</h4>
                                    <p dangerouslySetInnerHTML={{__html: item.node.content}}/>
                                </article>
                            </ReactWOW>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services