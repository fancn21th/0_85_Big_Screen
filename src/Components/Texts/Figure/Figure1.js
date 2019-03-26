import React from 'react'
import PropTypes from 'prop-types'
import './Figure1.css'

const Figure1 = ({ title, figure, className }) => (
  <div className={`figure1 ${className}`}>
    <span className="figure1--title">{title}</span>
    <span className="figure1--figure">{figure}</span>
  </div>
)

Figure1.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure1.defaultProps = {
  className: '',
}

export default Figure1
