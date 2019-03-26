import React from 'react'
import PropTypes from 'prop-types'

const Figure1 = ({ title, subTitle, figure }) => (
  <div>
    <span>{title}</span>
    <span>{subTitle}</span>
    <span>{figure}</span>
  </div>
)

Figure1.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
}

export default Figure1
