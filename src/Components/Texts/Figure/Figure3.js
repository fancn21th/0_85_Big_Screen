import React from 'react'
import PropTypes from 'prop-types'
import './Figure3.css'

const Figure3 = ({
  title, subTitle, figure, className,
}) => (
  <div className={`figure3 ${className}`}>
    <div className="figure3--content-wrapper">
      <span className="figure3--title">{title}</span>
      <span className="figure3--subTitle">{subTitle}</span>
      <span className="figure3--figure">{figure}</span>
    </div>
  </div>
)

Figure3.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure3.defaultProps = {
  className: '',
}

export default Figure3
