import logo from './logo.svg';
import './App.css';
import{useState} from 'react'

function App() {
  const[count,setCount]=useState(0)
  function handclick(){
    const newCount=count+1
    setCount(newCount)

  }
  function handleclick(){
    
    const newCount=count-1
    setCount(newCount)

   
       
     
    }

  return (
    <div className="App">
      <h4>count is:</h4>
      <h4>{count}</h4>
      <h1>{count}</h1>
      <button onClick={handclick}>Increase the count</button>
      <button onClick={handleclick}>Decrease the count</button>
  
      
    </div>
  );
}

export default App;
