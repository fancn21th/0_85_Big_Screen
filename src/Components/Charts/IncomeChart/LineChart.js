import React from 'react'
import {
  Chart, Geom, Axis, Tooltip,
} from 'bizcharts'
import PropTypes from 'prop-types'

const cols = {
  value: {
    min: 0,
  },
  date: {
    range: [0, 1],
  },
}

const LineChart = ({ data }) => (
  <Chart height={275} data={data} scale={cols} forceFit padding={[60, 60, 60, 60]} theme="dark">
    <Axis name="date" />
    <Axis name="value" />
    <Tooltip
      crosshairs={{
        type: 'y',
      }}
    />
    <Geom type="line" position="date*value" size={2} />
    <Geom
      type="point"
      position="date*value"
      size={4}
      shape="circle"
      style={{
        stroke: '#fff',
        lineWidth: 1,
      }}
    />
  </Chart>
)

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LineChart
