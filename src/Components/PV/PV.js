import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Texts/Title/Title'
import Figure from '../Texts/Figure/Figure1'
import PvChart from '../Charts/PvChart/PvChart'
import './PV.css'

const PV = ({ lastWeek, lastDay }) => (
  <div className="pv-container">
    <div className="pv-title">
      <Title className="pv-title--top" title="平台流量数据" subTitle="日均PV" />
      <div className="pv-title--bottom">
        <Figure className="pv-title--bottom__half" title="上周" figure={lastWeek} />
        <Figure className="pv-title--bottom__half" title="昨日" figure={lastDay} />
      </div>
    </div>
    <PvChart />
  </div>
)

PV.propTypes = {
  lastWeek: PropTypes.string.isRequired,
  lastDay: PropTypes.string.isRequired,
}

export default PV
