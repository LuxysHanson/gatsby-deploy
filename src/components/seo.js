/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const site = useStaticQuery(
    graphql`
      query SEO {
        wordPress {
          allSettings {
            generalSettingsTitle
            generalSettingsLanguage
            generalSettingsDescription
          }
        }
      }
    `
  )

  const metaDescription = site.wordPress.allSettings.generalSettingsDescription;
  const metaTitle = site.wordPress.allSettings.generalSettingsTitle;
  const metaLang = site.wordPress.allSettings.generalSettingsLanguage.slice(3).toLowerCase();

  return (
    <Helmet
      htmlAttributes={{
        metaLang,
      }}
      title={
          metaTitle
      }
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
