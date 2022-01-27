import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";

function TodoList() {
    const { todos, fetchTodos } = useContext(GlobalContext);

    useEffect(() => {
      fetchTodos();
    }, [])

    return (
        <>
            <ul>
                {todos.map((todoItem, i) => (
                    <li key={i}>{todoItem.title}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;