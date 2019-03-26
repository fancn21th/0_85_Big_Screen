import React from 'react'
import './App.css'
import GridLayout from 'react-grid-layout'

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
    <div key="a">平台流量数据(折线图)</div>
    <div key="b">有效用户数</div>
    <div key="c">注册用户数</div>
    <div key="d">付费用户数</div>
    <div key="e">营收金额 (饼图)</div>
    <div key="f">GMV 营收</div>
  </GridLayout>
)

export default App
