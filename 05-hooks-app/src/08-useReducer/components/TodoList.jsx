import PropTypes from "prop-types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {
        todos.map((item) => 
          <TodoListItem 
            key={item.id} 
            id={item.id}
            done={item.done}
            description={item.description} 
            onDeleteTodo={onDeleteTodo} 
            onToggleTodo={onToggleTodo}
          />
        )
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}