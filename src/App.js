import logo from './logo.svg';
import './App.css';
import {useNavigate ,Link} from 'react-router-dom'

function App() {
  const nevigate = useNavigate()

  function hanldeLogin () {
    nevigate('/login')
  }
  function handleRegister () {
    nevigate('/register')
  }
  function handleAbout(){
    nevigate('/About')
  }
  function handleHome(){
    nevigate('/Home')
  }



  return (
    <div className="App">
     <button onClick={hanldeLogin}>login</button> 
     <button onClick={handleRegister}>Register</button>
     <button onClick={handleAbout}>About us</button>
     <button onClick={handleHome}>Home</button>
     

    </div>
  );
}

export default App;