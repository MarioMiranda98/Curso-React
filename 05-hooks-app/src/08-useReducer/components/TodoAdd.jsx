import { useState } from "react"
import PropTypes from "prop-types";

export const TodoAdd = ({ handleNewTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const onChangeTodo = (e) => {
    setTodoInput(e.target.value);
  } 

  const onNewTodo = (event) => {
    event.preventDefault();

    if (!handleNewTodo) return;
    if (todoInput.length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description: todoInput,
      done: false,
    };

    handleNewTodo(newTodo);
    setTodoInput("");
  }

  return (
    <form action="submit" onSubmit={onNewTodo}>
      <input 
        type="text" 
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={todoInput}
        onChange={onChangeTodo}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  handleNewTodo: PropTypes.func.isRequired
}