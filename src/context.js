import axios from 'axios';
import { createContext, useState } from "react";
import useStateLogger from "./useStateLogger";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    // Global state
    const [name, setName] = useState('Edan');
    const [shoppingList, setShoppingList] = useState([
        'Milk',
        'Eggs',
        'Bananas'
    ]);

    // Fetching server data can go in here, too
    const fetchShoppingList = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        let items = res.data.map(item => item.title);
        setShoppingList(items);
    };

    // There are all the values that will be made available
    // from `useContext(GlobalContext)`
    const state = {
        name, setName,
        shoppingList, setShoppingList, fetchShoppingList
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