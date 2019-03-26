import React from 'react'
import PropTypes from 'prop-types'
import './Figure1.css'

const Figure1 = ({ title, figure, className }) => (
  <div className={`figure1 ${className}`}>
    <div className="figure1--content-wrapper">
      <span className="figure1--figure">{figure}</span>
      <span className="figure1--title">{title}</span>
    </div>
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
