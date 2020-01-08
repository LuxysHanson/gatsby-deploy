import React from "react"
import ReactWOW from "react-wow"
import {Link, animateScroll as scroll} from "react-scroll"

const Screen = () => (
    <section className="main-header">
        <Link to="/" className="site-logo-link">
            <img src="" alt=""/>
        </Link>
        <div className="intro">
            <div className="container intro-body">
                <h1>
                    <ReactWOW animation="fadeInUp" duration=".8s" delay=".0s">
                        <span>Hi,</span>
                    </ReactWOW>
                    <ReactWOW animation="fadeInUp" duration=".8s" delay=".4s">
                        <span>i'm Ersan</span>
                    </ReactWOW>
                </h1>
                <ReactWOW animation="fadeInUp" duration=".8s" delay=".8s">
                    <p>Верстальщик & Front-End разработчик</p>
                </ReactWOW>
            </div>
            <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
                <Link to="next" spy={true} smooth={true} duration={600}>
                    <i className="mbri-icons mbri-down mbr-iconfont"/>
                </Link>
            </div>
        </div>
    </section>
)

export default Screen