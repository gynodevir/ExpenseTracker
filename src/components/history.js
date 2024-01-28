import React, { useState } from 'react';
import "../components/histroy.css"; // Make sure the path is correct for your CSS file

const History = () => {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [total,setTotal] =useState(0)
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addData = (e) => {
    e.preventDefault();
    if (description.trim() !== '') {
      const data = {
        ID: (!items.length) ? 1 : items[items.length - 1].ID + 1,
        expense: (Number(cost) > 0), // Ensure cost is treated as a number
        cost: (cost),
        dt: description,
      };
      if (!data.expense) {
        setExpense(prevExpense => prevExpense + Number(data.cost));
      } else {
        setIncome(prevIncome => prevIncome + Number(data.cost));
      }
      setTotal(prevTotal => {
        if (data.expense) {
          return prevTotal + Number(data.cost);
        } else {
          // console.log(`expenst ${data.expense} and cost ${Number(data.cost)}`)
          return prevTotal + Number(data.cost);
        }
      });
      
      setItems([...items, data]);
      setDescription('');
      setCost('');
    }
  }
  console.log(`${total} income : ${income} expense : ${expense} `);

  const deleteItem = (it) => {
  const updatedItems = items.filter(item => item.ID !== it.ID);
  setItems(updatedItems);

  // Calculate the change in total based on the deleted item
  const changeInTotal = it.expense ? -Math.abs(Number(it.cost)) : Math.abs(Number(it.cost));
  const Income=  it.expense && -Math.abs(Number(it.cost))
  const Expense = !it.expense && +Math.abs(Number(it.cost))
  setExpense(prev => prev + Expense)
  setIncome(prev => prev + Income)

  // Update the total
  setTotal(prevTotal => prevTotal + changeInTotal);
};

  return (
    <div className="body">
    <h1>Expense Tracker</h1>
    
      <div className="balance-container">
        <h2>Your Balance</h2>
        <h2 id="balance" className="balance">${total.toFixed(2)}</h2>
      </div>
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
      
      <h1>History</h1>
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
      <div className='use-data'>
        <h1>Add your expenses</h1>
        <form onSubmit={addData} className='form'>
          <div className="input-container ic1">
            <input type="text" value={description} className = "input-container ic1" onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
          </div>
          <div className="cut"></div>
          <div className="input-container ic2">
            <input type='number' value={cost} onChange={(e) => setCost(e.target.value)} className="input-container ic2" placeholder='Amount'/>
          </div>
          <button type="submit" className='add-btn'>Add</button>
        </form>
        
      </div>
    </div>
  );
}

export default History;