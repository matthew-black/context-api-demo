import { useRef, useEffect } from "react";

/*
An attempt to replace redux-logger
*/
function useStateLogger(state) {
    const prevState = usePrevious(state);

    useEffect(() => {
        // Log previous and next state
        console.log('%cprev state', 'color: grey; font-weight: bold', objWithoutFns(prevState));
        console.log('%cnext state', 'color: green; font-weight: bold', objWithoutFns(state));
    });
}

// Helps us remember our previous state,
// so we can log it.
// Not required for everything else to work
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

export default useStateLogger;