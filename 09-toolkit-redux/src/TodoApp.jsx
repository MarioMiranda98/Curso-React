import { useState } from "react";
import { useGetTodosByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading: isLoadingTodo } = useGetTodosByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    if (todoId - 1 <= 0) return;

    setTodoId(todoId - 1);
  }

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <h4>isLoading... { isLoading ? "True" : "False" }</h4>

      <pre>...</pre>
      <ul>
        {
          todos.map((todo) => (<li key={todo.id}>{ todo.title } <strong>{todo.completed ? "Done" : "Pending"}</strong> </li>))
        }
      </ul>

      <hr />
      <h2>Todo</h2>
      <p>IsLoading Todo: {isLoadingTodo ? "True" : "False"}</p>
      <ul>
        <li>{todo?.title} : <strong>{todo?.completed ? "Done" : "Pending"}</strong> </li>
      </ul>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  )
}