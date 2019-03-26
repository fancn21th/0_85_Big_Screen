import React from 'react'
import Title from '../Title/Title'
import PvChart from '../Charts/PvChart/PvChart'
import './PV.css'

const PV = () => (
  <div className="pv-container">
    <Title title="平台流量数据" />
    <PvChart />
  </div>
)

export default PV
