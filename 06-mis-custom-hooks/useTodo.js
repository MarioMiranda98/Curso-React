import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todo-reducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo
    }

    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    const action = {
      type: "Remove Todo",
      payload: id,
    }

    dispatch(action);
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: "Toggle Todo",
      payload: id
    }

    dispatch(action);
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
};