import { userReducer, initialState } from "./user";

test("userReducer has initialState", () => {
  expect(userReducer(undefined, {})).toEqual(initialState);
}) 