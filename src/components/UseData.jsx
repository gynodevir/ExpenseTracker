import React from 'react'

const UseData = ({description,setDescription,cost,setCost,addData}) => {
  return (
    <div>
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
  )
}

export default UseData
