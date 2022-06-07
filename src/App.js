
import { useDispatch, useSelector } from 'react-redux';
import { Add,Dec,Addwithval,Mulwithval,Divwithval,Subwithval } from './Redux/actiontype';

import './App.css';
import React from 'react';
function App() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.count)
  let [input,setInput]=React.useState(0)
  return (
    <div className="App">
      <div>Redux Assignment</div>
      <div>Count:{count}</div>
      <button onClick={()=>dispatch(Add())}>Increment</button>
      <button onClick={()=>dispatch(Dec())}>Decrement</button>
      { count==="Error" ? <button onClick={()=>dispatch({type:"initialize"})}>Initialize to 0</button>:<></>}

      <div><input onChange={(e)=>setInput(e.target.value)} placeholder="Enter Number"></input>
      <button onClick={()=>dispatch(Addwithval(Number(input)))}>Add</button>
      <button onClick={()=>dispatch(Mulwithval(Number(input)))}>Multiply</button>
      <button onClick={()=>dispatch(Subwithval(Number(input)))}>Subtract</button>
      <button onClick={()=>dispatch(Divwithval(Number(input)))}>Divide</button>
      </div>
    </div>
  );
}

export default App;
