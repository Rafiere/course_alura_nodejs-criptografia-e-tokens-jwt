# NodeJS - Criptografia e Tokens JWT - Notes:

# Origens da Criptografia:

Desde o início da história, as pessoas sempre tiveram interesses em restringir uma informação para apenas um determinado grupo de pessoas.

A Cifra de César foi um dos primeiros elementos utilizados para transformar uma informação comum em uma informação criptografada.

Ao longo da história, foram desenvolvidas máquinas mecânicas com o objetivo de criptografar e descriptografar mensagens. Com a evolução da tecnologia, os computadores modernos passaram a cuidar da criptografia e da descriptografia das informações que eram trafegadas pela rede.

# Autorização x Autenticação:

Autorização: Uma autorização é a permissão para realizarmos uma determinada tarefa.

Autenticação: É provarmos que somos quem nós alegamos ser.

# Funções de Hash:

As funções de hash são criptografias que possuem um caminho único.

Informação -> Função de Hash -> Retorno de um Hash

Existem vários algoritmos de Hash, como o MD5, o SHA1, o SHA-256 e etc.

## Propriedades das Funções de Hash:

Não devem existir colisões, ou seja, as hashes sempre precisam ser diferentes.

As hashes devem ter um tamanho fixo, independente da palavra que foi inputada, para que o tamanho final da hash não dê dicas da palavra inicial que fez a hash ser gerada.

As hashes devem ter uma certa complexidade, isso faz com que seja um pouco demorado para as funções de hash serem executadas.

## Utilização de Hashes:

Podemos, por exemplo, criar uma senha, transformar essa senha em um hash e salvar apenas esse hash. Com isso, se outro usuário inserir essa mesma senha, será gerado um hash igual ao que está salvo no banco de dados e saberemos que aquele usuário inseriu a senha correta, mesmo sem sabermos qual é a senha do usuário.

Como as hashes não possuem colisões, o método acima é funcional.

## MD5:

É um dos primeiros algoritmos de hash projetados, porém, alguns hackers descobriram uma forma de decodificar esse algoritmo.

## SHA:

Os algoritmos dessa família são considerador mais seguros. Em geral, quanto maior o número após as letras "SHA", maior é a dificuldade para quebrar esse algoritmo.

O SHA-3, por exemplo, inclui fontes de aleatoriedades no código, o que torna ele muito mais difícil de ser decifrado do que os anteriores.
