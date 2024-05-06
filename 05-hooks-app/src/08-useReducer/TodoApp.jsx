import { TodoAdd, TodoList } from "./components";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();  

  return (
    <>
      <h1>Todo App (10) - <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
         <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  )
}