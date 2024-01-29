import React, { useState } from 'react';
import "../components/AllinOne.css"; // Make sure the path is correct for your CSS file
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import UseData from './UseData';
import History from './History';

const AllinOne = () => {
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
  // console.log(`${total} income : ${income} expense : ${expense} `);

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
    
      <Balance  total={total}/>
      <IncomeExpense income={income} expense={expense} />
      
      <h1>History</h1>
      <History items={items} deleteItem={deleteItem} />
      <UseData description={description} setDescription={setDescription} cost={cost} setCost={setCost} addData={addData} />
    </div>
  );
}

export default AllinOne;