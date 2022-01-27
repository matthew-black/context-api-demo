import { createContext, useContext, useState } from "react";
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

    // There are all the values that will be made available
    // from `useContext(GlobalContext)`
    const state = {
        name, setName,
        shoppingList, setShoppingList
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