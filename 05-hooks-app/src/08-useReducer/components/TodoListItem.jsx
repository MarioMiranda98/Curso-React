import PropTypes from "prop-types";

export const TodoListItem = ({
  id,
  description,
  done,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="span"
        className={`align-self-center ${
          done ? "text-decoration-line-through" : "text-decoration-none"
        }`}
        onClick={() => onToggleTodo(id)}
      >
        {description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(id)}
        aria-label="delete"
      >
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
