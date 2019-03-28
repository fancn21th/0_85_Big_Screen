// data-set 可以按需引入，除此之外不要引入别的包
import React from 'react'
import {
  Chart, Axis, Coord, Geom, Guide, View,
} from 'bizcharts'
import PropTypes from 'prop-types'

const { Text } = Guide

const IncomeChart = ({ presentage }) => {
  // 下面的代码会被作为 cdn script 注入 注释勿删
  // CDN START
  // 构造数据
  const data1 = []
  for (let i = 0; i < 50; i += 1) {
    const item = {}
    item.type = `${i}`
    item.value = 10
    data1.push(item)
  }

  const data2 = []
  for (let i = 0; i < 50; i += 1) {
    const item = {}
    const halfPresentage = Math.round(presentage / 2)
    item.type = `${i}`
    item.value = 10
    if (i === halfPresentage) {
      item.value = 14
    }
    if (i > halfPresentage) {
      item.value = 0
    }
    data2.push(item)
  }

  const cols = {
    type: {
      range: [0, 1],
    },
    value: {
      sync: true,
    },
  }

  const colsView2 = {
    type: {
      tickCount: 3,
    },
  }

  return (
    <Chart height={240} data={[1]} scale={cols} padding={[0, 0, 0, 0]} forceFit theme="dark">
      <View data={data1}>
        <Coord
          type="polar"
          startAngle={(-9 / 8) * Math.PI}
          endAngle={(1 / 8) * Math.PI}
          radius={0.8}
          innerRadius={0.75}
        />
        <Geom type="interval" position="type*value" color="rgba(0, 0, 0, 0.09)" size={6} />
      </View>
      <View data={data1} scale={colsView2}>
        <Coord
          type="polar"
          startAngle={(-9 / 8) * Math.PI}
          endAngle={(1 / 8) * Math.PI}
          radius={0.55}
          innerRadius={0.95}
        />
        <Geom type="interval" position="type*value" color="rgba(0, 0, 0, 0.09)" size={6} />
        <Axis
          name="type"
          grid={null}
          line={null}
          tickLine={null}
          label={{
            offset: -20,
            textStyle: {
              fontSize: 18,
              fill: '#CBCBCB',
              textAlign: 'center',
            },
            formatter: () => '',
          }}
        />
        <Axis name="value" visible={false} />
      </View>
      <View data={data2}>
        <Coord
          type="polar"
          startAngle={(-9 / 8) * Math.PI}
          endAngle={(1 / 8) * Math.PI}
          radius={0.8}
          innerRadius={0.75}
        />
        <Geom
          type="interval"
          position="type*value"
          color={['value', '#3023AE-#53A0FD']}
          opacity={1}
          size={6}
        />
        <Guide>
          <Text
            position={['50%', '65%']}
            content={`${presentage}%`}
            style={{
              fill: '#FFFFFF',
              fontSize: 60,
              textAlign: 'center',
              textBaseline: 'middle',
            }}
          />
        </Guide>
      </View>
    </Chart>
  )
}

IncomeChart.propTypes = {
  presentage: PropTypes.number.isRequired,
}

// CDN END
export default IncomeChart
