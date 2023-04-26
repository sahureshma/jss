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
    if (count > 0) {
      setCount(count - 1);
    }

    

   
       
     
    }

  return (
    <div className="App">
      <h1 style={{color:'blue'}}>count Increase and Decrease</h1>
      <h1 style={{color:'red'}}>Count: {count}</h1>
     
     
      <button onClick={handclick}>Increase the count</button>
      <button onClick={handleclick}>Decrease the count</button>
  
      
    </div>
  );
}

export default App;
