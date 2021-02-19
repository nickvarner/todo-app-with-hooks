import React from 'react'

const useLocalStorageState = (key, defaultVal) => {
    //make piece of state, based off of value in localstorage (or default)
    const [state, setState] = React.useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            val = defaultVal
        }
        return val;
    })
    //useeffect to update localstorage when state changes
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);
    return [state, setState];
}

export default useLocalStorageState;