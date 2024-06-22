import { todoReducer } from "../../src/08-useReducer/todo-reducer";

describe("Pruebas en Todo Reducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("Debe de regresar el estado incial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "Add Todo",
      payload: {
        id: 2,
        description: "Nuevo Todo #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: "Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("Debe de hacer toggle un todo", () => {
    const action = {
      type: "Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.at(0).done).toBe(true);
  });
});
