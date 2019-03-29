import React from 'react'
import {
  Chart, Geom, Axis, Tooltip,
} from 'bizcharts'
import PropTypes from 'prop-types'

const BarChart = ({ data }) => {
  const values = data.map(({ value }) => value)

  const max = Math.max(...values)

  const tickInterval = 10 ** (max.toString().length - 1)

  const cols = {
    value: {
      tickInterval,
    },
  }

  return (
    <div>
      <Chart height={275} data={data} scale={cols} padding={[60, 60, 60, 60]} forceFit>
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
