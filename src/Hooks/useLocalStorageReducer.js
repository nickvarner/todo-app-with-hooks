import React from 'react'

const useLocalStorageReducer = (key, defaultVal, reducer) => {
    //make piece of state, based off of value in localstorage (or default)
    const [state, dispatch] = React.useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            val = defaultVal
        }
        return val;
    })
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);
    return [state, dispatch];
}

export default useLocalStorageReducer;