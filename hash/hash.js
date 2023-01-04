import { createHash } from "crypto";
import User from "./User.js";

export const createCustomHash = (password) => {
  /* Os caracteres hexadecimais serão utilizados para representar essa hash. */
  return createHash("sha256").update(password).digest("hex");
};

// console.log(createCustomHash("1234"));

// const user = new User("Teste", "1234");

// console.log(user);

// user.autenticate("Teste", "1234");
