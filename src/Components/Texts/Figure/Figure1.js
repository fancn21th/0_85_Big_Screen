import React from 'react'
import PropTypes from 'prop-types'
import './Figure1.css'
import SubTitle from '../Title/subTitle'
import Figure from '../Title/figure'

const Figure1 = ({ subTitle, figure, className }) => (
  <div className={`figure1 ${className}`}>
    <div className="figure1--content-wrapper">
      <Figure figure={figure} />  
      <SubTitle subTitle={subTitle} />
    </div>
  </div>
)

Figure1.propTypes = {
  subTitle: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure1.defaultProps = {
  className: '',
}

export default Figure1
