import React from 'react'

const History = ({items,deleteItem}) => {
  return (
    <div>
      <div className='hist'>
        <ul className='items'>
          {(items.length === 0) ? <h1>There is no History</h1> : (
            items.map(item => (
              <li key={item.ID} className={item.expense ? 'item-green' : 'item-red'}>

                <span>{item.dt}</span> 
                <span className='cost'>{(item.expense) ? '+' + item.cost :  item.cost}</span>
                <button className='delete-btn' onClick={() => {
                  deleteItem(item)
                  
                }
                  }>X</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default History
