import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

/* Na encriptação assimétrica, temos duas chaves. A chave pública e a chave privada. */

/* A chave pública pode ser compartilhada sem nenhum tipo de problema, e as mensagens deverão ser encriptadas com essa chave pública. A chave privada não deverá ser compartilhada e ficará apenas com quem receberá a mensagem, dessa forma, apenas essa chave conseguirá desencriptar essa mensagem. */

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

console.log(publicKey);
console.log(privateKey);

/* Encriptando a informação (Temos a chave pública e a informação que será criptografada). */

const encryptedData = publicEncrypt(publicKey, Buffer.from("Secret Message"));

console.log(encryptedData.toString("hex"));

/* Desencriptando a informação (Temos a chave privada que descriptará a mensagem). */

const decryptData = privateDecrypt(privateKey, encryptedData);

console.log(decryptData.toString("utf-8"));
