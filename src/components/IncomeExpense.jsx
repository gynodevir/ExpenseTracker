import React from 'react'

const IncomeExpense = ({income,expense }) => {
  return (
    <div>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money-plus">+${income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p id="money-minus" className="money-minus">-${expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense
