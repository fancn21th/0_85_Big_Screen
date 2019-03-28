import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Texts/Title/Title'
import Figure from '../Texts/Figure/Figure1'
import IncomeChart from '../Charts/IncomeChart/IncomeChart'
import './Income.css'

const Income = ({ transfer, contract }) => (
  <div className="income-container">
    <div className="income-title">
      <Title className="income-title--top" title="营收金额" subTitle="2019" />
      <div className="income-title--bottom">
        <Figure className="income-title--bottom__half" title="已汇款金额" figure={transfer} />
        <Figure className="income-title--bottom__half" title="合同总金额" figure={contract} />
      </div>
    </div>
    <IncomeChart />
  </div>
)

Income.propTypes = {
  transfer: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
}

export default Income
