import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

/* Na encriptação simétrica, precisamos compartilhar a chave para que a outra parte possa desencriptar a informação. */

const message = "test";

const key = randomBytes(32);

/* É um adicional para deixar a chave mais difícil de ser decifrada. */
const vi = randomBytes(16);

const cipher = createCipheriv("aes256", key, vi);

const cipheredMessage =
  cipher.update(message, "utf-8", "hex") + cipher.final("hex");

console.log(`Cyphered Message: ${cipheredMessage}.`);

const decypher = createDecipheriv("aes256", key, vi);

const decypheredMessage =
  decypher.update(cipheredMessage, "hex", "utf-8") + decypher.final("utf-8");

console.log(`Decyphered Message: ${decypheredMessage}.`);
