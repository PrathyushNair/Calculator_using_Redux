
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
      
      <div className='countdiv'>{count}</div>
      <div><button className='indibutton' onClick={()=>dispatch(Add())}>Increment</button></div>
      <div><button className='indibutton' onClick={()=>dispatch(Dec())}>Decrement</button></div>
      <div>{ count==="Error" ? <button className='indibutton' onClick={()=>dispatch({type:"initialize"})}>Initialize to 0</button>:<></>}</div>
      

      <div className='flex'>
        <div style={{paddingTop:"40px"}}><input className='numberdiv' onChange={(e)=>setInput(e.target.value)} placeholder="Enter number"></input></div>
        <div className='buttonsforval'>
            <button className='indibutton' onClick={()=>dispatch(Addwithval(Number(input)))}>Add</button>
            <button className='indibutton' onClick={()=>dispatch(Mulwithval(Number(input)))}>Multiply</button>
            <button className='indibutton' onClick={()=>dispatch(Subwithval(Number(input)))}>Subtract</button>
            <button className='indibutton' onClick={()=>dispatch(Divwithval(Number(input)))}>Divide</button>
        </div>
      </div>
    </div>
  );
}

export default App;
