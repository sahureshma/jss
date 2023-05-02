import { useState } from 'react';
import './Name.css';
export default function Name() {
    const[data,setData]=useState([])


   const get=() =>{
    fetch('https://reqres.in/api/users/')
  .then((response) => response.json())
  .then((json) => {
  console.log(json);
  setData(json);
   });
   };
   

   return(
    <div className='primary'>
        My API<br/>
        <button onClick={get}>fetch API</button>
        <br/>
       <pre>{JSON.stringify(data,null,2)}</pre> 
    </div>
   )
}