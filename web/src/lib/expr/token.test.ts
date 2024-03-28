import { ID, LESS_THAN } from "./token";

test("token assert", () => {
  expect(ID).toBe("id");
  expect(LESS_THAN).toBe("<");
});
