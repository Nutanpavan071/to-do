import React, { useState } from 'react'

import './App.css';

function App() {

  const [InputText,setInputText] = useState("") ;
  const [Items,SetItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(){
      SetItems((prevValue)=>{
        return [...prevValue, InputText];
      })
      setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form input">
        <input onChange= {handleChange} type="text" value={InputText}/>
        <button onClick={addItem}>
          <span>ADD</span>
        </button>
      </div>
      <ul>
        {Items.map((val) => {
          return <li>{val}</li>
        }) }
      </ul>
    </div>
  )
}

export default App;
