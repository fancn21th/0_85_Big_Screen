import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Texts/Title/Title'
import Figure from '../Texts/Figure/Figure1'
import LineChart from '../Charts/PvChart/LineChart'
import './PV.css'

const PV = ({ lastWeek, lastDay, pvData }) => (
  <div className="pv-container">
    <div className="pv-title">
      <Title className="pv-title--top" title="日均流量数据" subTitle="当月" />
      <div className="pv-title--bottom">
        <Figure className="pv-title--bottom__half" title="上周" figure={lastWeek} />
        <Figure className="pv-title--bottom__half" title="昨日" figure={lastDay} />
      </div>
    </div>
    <LineChart data={pvData} />
  </div>
)

PV.propTypes = {
  lastWeek: PropTypes.string.isRequired,
  lastDay: PropTypes.string.isRequired,
  pvData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PV
