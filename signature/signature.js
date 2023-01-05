import { generateKeyPairSync, createSign, createVerify } from "crypto";

/* Nas assinaturas, a chave privada serve para assinarmos um documento e a chave pública serve para verificarmos se essa assinatura é real. */

/* Ao criarmos um documento, utilizamos uma chave privada e geramos uma assinatura digital para esse documento. Essa assinatura digital é uma hash desse documento. */

/* Quando alguém receber a mensagem, ele vai, através de uma assinatura digital, utilizar uma chave pública e gerar esse documento, e esse documento gerado deve ser igual ao documento assinado. */

/* Após isso, comparamos o documento recebido com o documento gerado. Se eles forem iguais, isso significa que o documento é válido. Se eles forem diferentes, significa que ele é inválido. */

/* We're generating the key pair. */
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

let data = "This message will be signed";

/* Creating a Signer: */
const signer = createSign("rsa-sha256");

signer.update(data);

/* Estamos assinando a mensagem com a chave privada. */

const sign = signer.sign(privateKey, "hex");

console.log(`Sign: ${sign}`);

/* * Simulando o envio do documento para outra pessoa. Ela terá que receber o documento, a assinatura e a chave pública * */

/* Estamos verificando a assinatura da mensagem. */
const verifier = createVerify("rsa-sha256");

verifier.update(data);

const isVerified = verifier.verify(publicKey, sign, "hex");

console.log(`Is verified: ${isVerified}`);
