/// <reference types="cypress" />

import { createUser, deleteUser, loginUser } from "../../support/helpers/apiHelpers/userAPI";
import { generateUserData } from "../../utils/fakeData";

describe("PlaceOrderApi", () => {
  it("PlaceOrder Using API", () => {
 const userData = generateUserData()
  createUser(userData)
  loginUser(userData)
  deleteUser(userData)
  });
});
