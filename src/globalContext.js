import axios from 'axios';
import { createContext, useState } from "react";
import useStateLogger from "./useStateLogger";
// import fruitsContext from "./fruitsContext.js"

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Todos stuff!
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

  const updateTodo = async (todo) => {
    const res = await axios.put(`/api/todos/${todo.id}`, todo);
    fetchTodos();
  }

  // Fruits stuff!
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    const res = await axios.get('/api/fruits');
    setFruits(res.data);
  }

  const createFruit = async (fruit) => {
    const data = { fruit };
    const res = await axios.post('/api/fruits', data);
    fetchFruits();
  }

  // There are all the values that will be made available
  // from `useContext(GlobalContext)`
  const state = {
    // todos stuff
    todos,
    setTodos,
    fetchTodos,
    createTodo,
    updateTodo,
    // fruits stuff
    fruits,
    fetchFruits,
    createFruit
  }

  // Log state changes, similar to redux-logger
  // Not necessary for this to work, but it's nice
  useStateLogger(state);

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  );
}