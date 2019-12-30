import React, {Component} from "react"

/* Components */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"

/* Sections */
import About from "../layouts/about"
import Services from "../layouts/services"
import Portfolio from "../layouts/portfolio"
import Skills from "../layouts/skills"
import Experience from "../layouts/experience"


class IndexPage extends Component {
    componentDidMount() {
        let js = new Main();
        js.scrollDown();
        js.scrollSticky();
        js.portfolioFilter();
        js.skillsChart();
    }

    render() {
        return (
            <Layout>
                <SEO title="My portfolio"/>
                <About/>
                <Services/>
                <Portfolio/>
                <Skills/>
                <Experience/>
            </Layout>
        );
    }
}

export default IndexPage