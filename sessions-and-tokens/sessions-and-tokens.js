import jwt from "jsonwebtoken";

/* Uma sessão é a quantidade de tempo em que um usuário está autenticado e conectado à um serviço ou um sistema. */

/* O JWT é dividido entre o cabeçalho (header), que vai ter algumas informações sobre o tipo de algoritmo que o token está utilizando, os dados (payload), que contém os dados que estão sendo transmitidos no token e a assinatura (signature), que armazenará os segredos do token. Cada parte é separada por um "." no token. */

const secretKey = "secretKey";

/* We're creating a JWT token signed with our secretkey. */
const token = jwt.sign(
  {
    nickname: "jm",
    course: "NodeJS and Security",
  },
  secretKey
);

console.log(token);

/* Decodifing token */

const tokenDecodificado = jwt.verify(token, secretKey);

console.log(tokenDecodificado);

/* Para armazenar tokens JWT no navegador, é recomendado utilizarmos cookies "httpOnly", que são enviados apenas em solicitações HTTP para o servidor. Ele nunca é acessível para leitura e para escrita a partir do JavaScript que está em execução no navegador, e pode ter uma data de expiração definida. */
