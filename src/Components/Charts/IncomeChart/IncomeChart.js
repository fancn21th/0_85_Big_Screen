import React from 'react'
import {
  Chart, Geom, Axis, Tooltip, Coord, Label, Legend,
} from 'bizcharts'
import DataSet from '@antv/data-set'

class Innerlabel extends React.Component {
  render() {
    const { DataView } = DataSet
    const data = [
      {
        item: '事例一',
        count: 40,
      },
      {
        item: '事例二',
        count: 21,
      },
      {
        item: '事例三',
        count: 17,
      },
      {
        item: '事例四',
        count: 13,
      },
      {
        item: '事例五',
        count: 9,
      },
    ]
    const dv = new DataView()
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    })
    const cols = {
      percent: {
        formatter: (val) => {
          val = `${val * 100}%`
          return val
        },
      },
    }
    return (
      <div>
        <Chart height={400} data={dv} scale={cols} padding={[80, 100, 80, 80]} forceFit>
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          <Legend position="right" offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              'item*percent',
              (item, percent) => {
                percent = `${percent * 100}%`
                return {
                  name: item,
                  value: percent,
                }
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          >
            <Label
              content="percent"
              offset={-40}
              textStyle={{
                rotate: 0,
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)',
              }}
            />
          </Geom>
        </Chart>
      </div>
    )
  }
}

export default Innerlabel
