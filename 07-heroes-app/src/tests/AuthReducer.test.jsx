import { authReducer } from "./../auth/context/AuthReducer";
import { types } from "../auth/types/types";

describe("Pruebas en el auth reducer", () => {
  test("Debe retornar el estado inicial", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("Debe de llamar el login y aunteticar el usuario", () => {
    const action = {
      type: types.login,
      payload: {
        id: "123",
        name: "Mario",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Debe de llamar el logout y borrar el nombre", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true }, action);
    expect(state).toEqual({
      logged: false,
      user: undefined,
    });
  });
});
