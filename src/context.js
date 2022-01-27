import axios from 'axios';
import { createContext, useState } from "react";
import useStateLogger from "./useStateLogger";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // Global state
    const [todos, setTodos] = useState([]);

    // Fetching server data can go in here, too
    const fetchTodos = async () => {
        const res = await axios.get('/api/todos');
        setTodos(res.data);
    };

    const createTodo = async (title) => {
        const data = { title };
        const res = await axios.post('/api/todos', data);
        console.log('res', res)
        fetchTodos();
    }

    // There are all the values that will be made available
    // from `useContext(GlobalContext)`
    const state = {
        todos,
        setTodos,
        fetchTodos,
        createTodo
    }

    // Log state changes, similar to redux-logger
    // Not necessary for this to work, but it's nice
    useStateLogger(state);

    return (
        <GlobalContext.Provider
            value={state}
        >
            {children}
        </GlobalContext.Provider>
    );
}