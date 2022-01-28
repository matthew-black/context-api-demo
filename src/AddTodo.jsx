import { useContext, useState } from "react";
import { GlobalContext } from "./globalContext";

function AddItem() {
  const [todo, setTodo] = useState('');
  const { createTodo } = useContext(GlobalContext);

  const onAddTodo = (e) => {
    e.preventDefault();

    createTodo(todo);
    
    setTodo('');
  }

    return (
      <>
        <form onSubmit={onAddTodo}>
          <label>Add Todo</label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </>
    )
}

export default AddItem;