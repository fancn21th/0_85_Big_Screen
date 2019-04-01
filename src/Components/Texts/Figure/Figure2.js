import React from 'react'
import PropTypes from 'prop-types'
import './Figure2.css'
import SubTitle from '../Title/subTitle'
import Figure from '../Title/figure'

const Figure2 = ({
  subTitle, figure, className,
}) => (
  <div className={`figure2 ${className}`}>
    <div className="text-figure">
      <SubTitle subTitle={subTitle} />
      <Figure figure={figure} />
    </div>
  </div>
)

Figure2.propTypes = {
  subTitle: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure2.defaultProps = {
  className: '',
}

export default Figure2
