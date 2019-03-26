import React from 'react'
import PropTypes from 'prop-types'
import './Figure2.css'

const Figure2 = ({
  title, subTitle, figure, className,
}) => (
  <div className={`figure2 ${className}`}>
    <div className="figure2--content-wrapper">
      <span className="figure2--title">{title}</span>
      <span className="figure2--subTitle">{subTitle}</span>
      <span className="figure2--figure">{figure}</span>
    </div>
  </div>
)

Figure2.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure2.defaultProps = {
  className: '',
}

export default Figure2
