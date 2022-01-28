import { useContext, useEffect } from "react";
import { GlobalContext } from "./globalContext";

function TodoList() {
  const { todos, fetchTodos, updateTodo } = useContext(GlobalContext);

  useEffect(() => {
    fetchTodos();
  }, [])

  const onComplete = (e, todoItem) => {
    e.preventDefault();

    console.log(todoItem);
    todoItem.completed = true;
    updateTodo(todoItem)
  }

  return (
    <>
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.completed ? 
                '✅'
              :
                <button onClick={(e) => onComplete(e, todoItem)}>
                  🐨
                </button>
            }
            {todoItem.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList;