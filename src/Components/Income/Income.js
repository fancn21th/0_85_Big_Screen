import React from 'react'
import Title from '../Title/Title'
import IncomeChart from '../Charts/IncomeChart/IncomeChart'
import './Income.css'

const PV = () => (
  <div className="income-container">
    <Title title="营收金额" />
    <IncomeChart />
  </div>
)

export default PV
