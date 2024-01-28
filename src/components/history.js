import React, { useState } from 'react';
import "../components/histroy.css"; // Make sure the path is correct for your CSS file

const History = () => {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     addData();
  //   }
  // };

  const addData = () => {
    if (description.trim() !== '') {
      const data = {
        ID: (!items.length) ? 1 : items[items.length - 1].ID + 1,
        dt: description,
      };
      setItems([...items, data]);
      setDescription('');
    }
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.ID !== id);
    setItems(updatedItems);
  }

  return (
    <>
      <h1>History</h1>
      {/* <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Description"
      /> */}
      <div className='hist'>
        <ul className='items'>
          {items.map(item => (
            <li key={item.ID} className='item'>
              {item.dt} 
              <button className='delete-btn' onClick={() => deleteItem(item.ID)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default History;