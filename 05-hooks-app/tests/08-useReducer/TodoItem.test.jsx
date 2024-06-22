import { fireEvent, render, screen } from "@testing-library/react";
import { TodoListItem } from "../../src/08-useReducer/components";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del Alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el Todo pendiente de completar", () => {
    render(
      <TodoListItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const liElement = screen.getByRole("listitem");
    const spanElement = screen.getByLabelText("span");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between",
    );

    expect(spanElement.className).toContain("align-self-center");
  });

  test("Debe de mostrar el todo completado", () => {
    todo.done = true;

    render(
      <TodoListItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("Span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoListItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalled();
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("El boton debe de llamar el DeleteTodo cuando se hace click", () => {
    render(
      <TodoListItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    );

    const buttonElement = screen.getByLabelText("delete");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalled();
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
