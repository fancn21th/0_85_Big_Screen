import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'

const Title = ({ title, subTitle, className }) => (
  <div className={`title ${className}`}>
    <div className="title--content-wrapper">
      <span className="title--main">{title}</span>
      <span className="title--sub">{subTitle}</span>
    </div>
  </div>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Title.defaultProps = {
  className: '',
}

export default Title
