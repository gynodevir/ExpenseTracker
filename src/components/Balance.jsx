import React from 'react'

const Balance = ({total}) => {
  return (
    <div>
      <div className="balance-container">
        <h2>Your Balance</h2>
        <h2 id="balance" className="balance">${total.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Balance
