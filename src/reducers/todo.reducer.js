import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state, {id: uuidv4(), task: action.task, completed: false}];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
              );
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
              );
        default:
            return state
    }
}

// {type: "add", task: "walk the dog"}
// {type: "remove", id: 123}
// {type: "toggle", id: 2392}
// {type: "edit", id: 289340, newTask: "walk cat"}

export default reducer