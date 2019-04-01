import React from 'react'
import PropTypes from 'prop-types'
import './subTitle.css'

const SubTitle = ({ subTitle, className }) => (
  <div className={`subTitle ${className}`}>
    <div className="subTitle--content-wrapper">
      <span className="subTitle--sub">{subTitle}</span>
    </div>
  </div>
)

SubTitle.propTypes = {
  subTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
}

SubTitle.defaultProps = {
  className: '',
}

export default SubTitle
