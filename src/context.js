import { createContext, useContext, useState, useRef, useEffect } from "react";
import * as Diff from 'diff';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [name, setName] = useState('Edan');
    const [shoppingList, setShoppingList] = useState([
        'Milk',
        'Eggs',
        'Bananas'
    ]);

    const state = {
        name, setName,
        shoppingList, setShoppingList
    }

    // For logging only
    const prevState = usePrevious(state);

    useEffect(() => {
        // Log previous and next state
        console.log('%cprev state', 'color: grey; font-weight: bold', objWithoutFns(prevState));
        console.log('%cnext state', 'color: green; font-weight: bold', objWithoutFns(state));
    });

    return (
        <GlobalContext.Provider
            value={state}
        >
            {children}
        </GlobalContext.Provider>
    );
}

// If you want a shorthand..
export function useGlobalContext() {
    return useContext(GlobalContext);
}

// For logging only
// https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function objWithoutFns(obj) {
    let newObj = {};

    if (!obj) {
        return;
    }

    for (let [key, val] of Object.entries(obj)) {
        if (typeof val !== 'function') {
            newObj[key] = val;
        }
    }

    return newObj;
}