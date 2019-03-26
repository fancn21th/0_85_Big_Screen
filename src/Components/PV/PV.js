import React from 'react'
import Title from '../Texts/Title/Title'
import Figure from '../Texts/Figure/Figure1'
import PvChart from '../Charts/PvChart/PvChart'
import './PV.css'

const PV = () => (
  <div className="pv-container">
    <div className="pv-title">
      <Title className="pv-title--top" title="平台流量数据" subTitle="日均PV" />
      <div className="pv-title--bottom">
        <Figure className="pv-title--bottom__half" title="上周" figure="4094" />
        <Figure className="pv-title--bottom__half" title="昨日" figure="5042" />
      </div>
    </div>
    <PvChart />
  </div>
)

export default PV
