import { scrypt, randomBytes, timingSafeEqual, scryptSync } from "crypto";
import User from "../hash/User.js";

export const createHashWithDetails = (password) => {
  /* We're creating random bytes to increment the hash generated by the hash algorithm. */
  const detail = randomBytes(16).toString("hex");

  const hashedPassword = scryptSync(password, detail, 64).toString("hex");

  return `${detail}:${hashedPassword}`;
};

const newUser = new User("Joana Manuela", "secretpassword");

newUser.authenticateWithDetail("Joana Manuela", "secretpassword");
console.log(newUser);
