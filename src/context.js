import { createContext, useContext, useState } from "react";


export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [name, setName] = useState('Edan');
    const [shoppingList, setShoppingList] = useState([
        'Milk',
        'Eggs',
        'Bananas'
    ]);

    return (
        <GlobalContext.Provider
            value={{
                name, setName,
                shoppingList, setShoppingList
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// If you want a shorthand..
export function useGlobalContext() {
    return useContext(GlobalContext);
}