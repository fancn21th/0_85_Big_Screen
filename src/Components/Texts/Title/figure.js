import React from 'react'
import PropTypes from 'prop-types'
import './figure.css'

const Figure1 = ({figure, className }) => (
  <div className={`figure ${className}`}>
    <div className="figure--content-wrapper">
      <span className="figure--figure">{figure}</span>
    </div>
  </div>
)

Figure1.propTypes = {
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure1.defaultProps = {
  className: '',
}

export default Figure1
