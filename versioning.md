# Versioning

## versão 1.1.0 - Sessão Zero
No início, o Discordbot com algumas funcionalidades simples, como §classes, §ações, §mecanicas, etc. Ele possui uma conexão 24/7 a partir de um servidor do site replit.com, com uma "gambiarra" própria para manter ele rodando durante o dia todo.

### versão 1.1.1
Versão adicionada em 24 de Abril

#### Features
* Adição de um comando de sugestões (§sugestões ou §sugestoes), que aceita sugestões e manda para um arquivo no servidor que vai anotar a sugestão
#### Correções
* Correção de alguns erros de digitação dentro do texto de classes
* Foi retirado algumas linhas de código de testagem, a fim de otimizar o código

### versão 1.1.2
Versão adicionada em 24 de maio

#### Features
* Inicio da adição de raças, com §elfo e §anão
* Adição de um .gitignore para os modulos utilizados e de um .env para salvar senhas de forma segura
#### Correções
* Correção de erro de inicialização feito pelo "npm start"
* Retirada de linhas do package.json que não estavam sendo usadas e poderiam causar confusão

### versão 1.1.3
Versão adicionada em 30 de maio

#### Features
* Continuação da adição de raças, com adição de mais 4 raças: §halfling, §humano, §draconato e §gnomo
* Criação oficial de um §raças com as opções de comandos de raça possíveis dentro do bot, as 3 últimas porem ainda não estão disponívels
* Aplicação oficial do .env dentro do index.js, que melhora o sistema de senhas de bots
#### Correções
* Correção de boa prática do cliente.on("ready", ...) para cliente.once("ready", ...), o que ajuda no entendimento do comando
* Correção do link de versioning dentro do README.md

### versão 1.1.4
Versão adicionada em 02 de junho

#### Features
* Adição das 3 últimas raças restantes: §meio-elfo, §meio-orc e §tiefling
#### Correções
* Correção da descrição do comando §raça
* Correção do nome da subclasse de elfo "elfo negro" para "elfo sombrio"

### versão 1.2.4
Versão adicionada em 18 de junho

#### Features
* Adição do comando §magias com links para otimização das magias de classe
* Adição do comando §magia [nome-da-magia], com conexão a uma API de Dungeons and Dragons, que responde as informações da magia para o usuario
* Instalação do pacote Axios para lidar com métodos HTTP relacionados à API
#### Correções
* Correção do nome de discordbot para Dungeonbot no Package.json
