import React from 'react'
import PropTypes from 'prop-types'
import './Figure3.css'
import Title from '../Title/Title'
import Figure from '../Title/figure'

const Figure3 = ({
  title, figure, className,
}) => (
  <div className={`figure3 ${className}`}>
    <div className="text-figure3">
      <Title title={title} />
      <Figure figure={figure} />
    </div>
  </div>
)

Figure3.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Figure3.defaultProps = {
  className: '',
}

export default Figure3
