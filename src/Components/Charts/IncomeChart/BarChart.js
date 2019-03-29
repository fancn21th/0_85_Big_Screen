import React from 'react'
import {
  Chart, Geom, Axis, Tooltip,
} from 'bizcharts'
import PropTypes from 'prop-types'

const BarChart = ({ data }) => {
  const cols = {
    value: {
      tickInterval: 20,
    },
  }

  return (
    <div>
      <Chart height={275} data={data} scale={cols} padding={[60, 60, 60, 60]} forceFit theme="dark">
        <Axis name="date" />
        <Axis name="value" />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom type="interval" position="date*value" />
      </Chart>
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BarChart
