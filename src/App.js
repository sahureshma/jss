import logo from './logo.svg';
import './App.css';
import Todo from './component/molecule/Todo/Todo';
function App() {
  return (
    <div className="App">
      <span className='title'><b>Todo List</b></span>
      <Todo/>
    </div>
  );
}

export default App;