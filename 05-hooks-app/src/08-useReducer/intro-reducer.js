const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
}

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
}

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
}

let todos = todoReducer(initialState);

console.log(todos)

todos = todoReducer(initialState, addTodoAction)

console.log(todos)
// todos.push({
//   id: 2,
//   todo: "Recolectar la piedra del poder",
//   done: false,
// });
