import { useContext, useState } from "react";
import { GlobalContext } from "./context";

function AddItem() {
    const [todo, setTodo] = useState('');
    const { createTodo } = useContext(GlobalContext);

    const onAddTodo = (evt) => {
        evt.preventDefault();

        createTodo(todo);
        
        setTodo('');
    }

    return (
        <>
            <form onSubmit={onAddTodo}>
                <label>Add Todo</label>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddItem;