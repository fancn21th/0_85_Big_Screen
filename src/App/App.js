import React from 'react'
import './App.css'
import GridLayout from 'react-grid-layout'
import PV from '../Components/PV/PV'
import Income from '../Components/Income/Income'
import Figure from '../Components/Texts/Figure/Figure2'

/*
  a: 平台流量数据(折线图)
  b: 有效用户数
  c: 注册用户数
  d: 付费用户数

  e: 营收金额 (饼图)
  f: GMV 营收
*/
const layout = [
  {
    i: 'a',
    x: 0,
    y: 0,
    w: 4,
    h: 12,
  },
  {
    i: 'b',
    x: 4,
    y: 0,
    w: 2,
    h: 4,
  },
  {
    i: 'c',
    x: 4,
    y: 0,
    w: 2,
    h: 4,
  },
  {
    i: 'd',
    x: 4,
    y: 0,
    w: 2,
    h: 4,
  },
  {
    i: 'e',
    x: 6,
    y: 0,
    w: 6,
    h: 8,
  },
  {
    i: 'f',
    x: 6,
    y: 0,
    w: 6,
    h: 4,
  },
]

const App = () => (
  <GridLayout className="layout" layout={layout} cols={12} rowHeight={60} width={1920}>
    <div key="a">
      <PV />
    </div>
    <div key="b">
      <Figure title="有效用户数" subTitle="OKCHEM" figure="24,222" />
    </div>
    <div key="c">
      <Figure title="注册用户数" subTitle="OKCHEM" figure="24,222" />
    </div>
    <div key="d">
      <Figure title="付费用户数" subTitle="OKCHEM" figure="24,222" />
    </div>
    <div key="e">
      <Income />
    </div>
    <div key="f">
      <Figure title="GMV 营收" subTitle="总金额" figure="￥2,243,222" />
    </div>
  </GridLayout>
)

export default App
