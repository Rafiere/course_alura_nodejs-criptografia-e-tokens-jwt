import { scryptSync, timingSafeEqual } from "crypto";
import { createHashWithDetails } from "../hash-with-details/HashWithDetails.js";
import { createCustomHash } from "./hash.js";

export default class User {
  // constructor(name, password) {
  //   this.name = name;
  //   this.hashedPassword = createCustomHash(password);
  // }

  constructor(name, password) {
    this.name = name;
    [this.detail, this.hashedPassword] =
      createHashWithDetails(password).split(":");
  }

  autenticate(name, password) {
    if (
      name === this.name &&
      this.hashedPassword === createCustomHash(password)
    ) {
      console.log("Successful!");
    } else {
      console.log("Failed. Wrong username or password.");
    }
  }

  authenticateWithDetail(name, password) {
    if (name === this.name) {
      const hashTest = scryptSync(password, this.detail, 64);
      const realHash = Buffer.from(this.hashedPassword, "hex");

      const hashesAreEqual = timingSafeEqual(hashTest, realHash);

      if (hashesAreEqual) {
        console.log("Successful!");
        return true;
      }

      console.log("Wrong user or password.");
      return false;
    }
  }
}
