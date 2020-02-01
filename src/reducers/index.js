export const initialState = {
  user: {
    name: "Johnny",
    surname: "Happy",
    age: 28
  }
}

export function rootReducer(state = initialState) {
  return state;
}