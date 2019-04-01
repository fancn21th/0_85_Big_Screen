import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Texts/Title/Title'
import Figure from '../Texts/Figure/Figure1'
import PercentageChart from '../Charts/IncomeChart/PercentageChart'
import BarChart from '../Charts/IncomeChart/BarChart'
import './Income.css'

const Income = ({ transfer, contract, incomeData }) => {
  const transferCount = /\d{1,}\.\d{1,}/.exec(transfer)

  const contractCount = /\d{1,}\.\d{1,}/.exec(contract)

  const percentage = Math.round((transferCount / contractCount) * 100) || '0'

  return (
    <div className="income-container">
      <div className="income-title">
        <Title className="income-title--top" title="2019年营收金额" subTitle="2019年营收金额" />
        <div className="income-title--bottom">
          <Figure className="income-title--bottom__half" subTitle="已收款金额" figure={transfer} />
          <Figure className="income-title--bottom__half" subTitle="合同总金额" figure={contract} />
        </div>
      </div>
      <div className="income-charts">
        <div className="income-charts__left">
          <BarChart data={incomeData} />
        </div>
        <div className="income-charts__right">
          <PercentageChart percentage={percentage} />
        </div>
      </div>
    </div>
  )
}

Income.propTypes = {
  transfer: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  incomeData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Income
