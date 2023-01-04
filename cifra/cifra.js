/* Nesse arquivo, inseriremos uma demonstração da Cifra de César em JavaScript. */

const secretMessage = "mysecretmessage";

const encryptMessage = (message, movesCount) => {
  const arrayEncryptedMessage = message.split("").map((char) => {
    /* We're getting the code of the char */
    const charCode = char.charCodeAt(0);

    return String.fromCharCode(charCode + movesCount);
  });

  return arrayEncryptedMessage.join("");
};

const decryptMessage = (message, movesCount) => {
  const arrayEncryptedMessage = message.split("").map((char) => {
    /* We're getting the code of the char */
    const charCode = char.charCodeAt(0);

    return String.fromCharCode(charCode - movesCount);
  });

  return arrayEncryptedMessage.join("");
};

const encryptedMessage = encryptMessage(secretMessage, 3);
const decryptedMessage = decryptMessage(encryptedMessage, 3);

console.log(`Encrypted Message: ${encryptedMessage}`);
console.log(`Decrypted Message: ${decryptedMessage}`);
