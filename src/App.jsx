
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import AddFruit from './AddFruit';
import FruitList from './FruitList';
import './App.css'

function App() {

  return (
    <div>
      <div className="App-header">
      <h1>Fun with Context.</h1>
      </div>
      <div className="todosDiv">
        <h3>Todos:</h3>
        <AddTodo />
        <TodoList />
      </div>

      <div className="fruitsDiv">
        <h3>Fruits:</h3>
        <AddFruit />
        <FruitList />
      </div>

    </div>
  );
}

export default App;
