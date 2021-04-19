# Dungeonbot
DungeonBot repository. Discord bot focused on Dungeons and Dragons 5e content.  
Repositorio do DungeonBot. Bot do Discord focado em conteúdo do RPG Dungeons and Dragons 5e

## Sections:
[How it works on Discord? / Como ele funciona no Discord?](##how-it-works-on-discord?--como-ele-funciona-no-discord?)  
[How the code works? / Como o código funciona?](##how-the-code-works?--como-o-código-funciona?)

## How it works on Discord? / Como ele funciona no Discord?
It has as a reading command the section symbol § (alt gr + '+' in windows and behind the ¶ button on android).
If the word after the symbol is equal to one of its commands, it read the command and send as answer the message with the command's content  
Ele possui como comando de leitura o simbolo de parágrafo § (alt gr + '+' no windows e um botão atrás do ¶ no android). 
Se a palavra depois do símbolo for correspondente a um de seus comandos, ele irá ler o comando e mandar uma mensagem de resposta com o conteúdo correspondente ao comando  
EX1: command index called using "§olá" or "§ola" / comando index chamado a partir de "§olá" ou "§ola"
![exemplo ola](/imgs/Discordbot1.png)   
EX2: embed command to a certain D&D class, called using "§artifice" / comando do tipo embed para uma classe específica do D&D, chamado a partir de "§artifice"  
![exemplo embed](/imgs/Discordbot2.png)  
EX3: correction command based on a common mistake by users / comando de correção baseado em um erro comum dos usuários  
![exemplo correcao](/imgs/Discordbot3.png)  

## How the code works? / Como o código funciona?
After it started running, with **_node index.js_**, the Discord client logs in the bot and waits an event to happen inside Discord. Two types of events it waits are: "ready", emitted when the client is logged on the account, and "message", emitted when a message is send inside the server where the bot is on.  
Ao rodar, com **_node index.js_**, o cliente do discord loga no bot e espera um evento acontecer dentro do discord, dois eventos que ele espera são: "ready", emitido quando o cliente entra na conta, e o "message", quando alguém manda mensagem dentro do servidor onde o bot está.  
```javascript
const Discord = require("discord.js")
const client = new Discord.Client() //creates a new client

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} !`)
} ) //waits for ready, if ready logs the user tag of the client

const comandos = require("./comandosteste") 
client.on("message", comandos) //waits for message, if message, uses a callback function located in the comandos.js file

client.login("bot password goes here") //logs on the account
```
The callback function called by the message event is located in the comandoteste.js file and is responsible for processing the message and linking the especific command with the embed the user wants to use.  
A função Callback chamada pelo evento de mensagem está localizada no arquivo comandosteste.js e é responsavel por tratar a mensagem e relacionar o comando com o embed específico que o usuário deseja usar  
```javascript
module.exports = async function (msg){
  if (msg.author.bot) return //watches not to reply to itself

  let tokens = msg.content.split(" "); //divides the whole message into small tokens
  let command = tokens.shift(); //gets the first token
  if(command.charAt(0) === "§"){ //sees if first token has the § symbol
    command = command.substring(1); //creates a new string with all the characters after §
    if(command in CommandsClasses){ //if the new string is in the object CommandsClasses, does the function inside it
      CommandsClasses[command](msg);
    }
    else if (command in ComandsGerais){ //if the new string is in the object ComandsGerais, does the function inside it
      ComandsGerais[command](msg);
    }
  }
}
```
To relationate the command with the embed, the bot utilizes a command object. This object has functions that call the specific embed if the command is equal to one of its properties.  
Para relacionar o comando com o embed, foi utilizado um objeto de comandos que possui uma função que chama o embed caso esse comando for igual a uma de suas propriedades. 
```javascript
const artifice = require("./embeds/embed"); 
const CommandsClasses = { //object
  artifice: (msg) =>{msg.channel.send(artifice.artificeEmb)} //property with a function related to the embed
}
```
The embeds are located in a different folder and are created with the MessageEmbed() function from Discord.js. Each embed is exported as a different function.  
Os embeds estão em uma pasta separada e são criados com a função MessageEmbed() do Discord.js. Cada embed é exportado como uma função separada.
```javascript
const artificeEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff') 
  .setTitle('Artifice')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Inteligência, seguido de Constituição ou Destreza \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves, armaduras médias e escudos \n Armas: armas simples \n Ferramentas: ferramenta do ladrão, ferramenta do construtor, um tipo de ferramenta de artesão de sua escolha \n Testes de resistência: Constituição, Inteligência \n Pericias: duas entre: arcanismo, história, investigação, medicina natureza, percepção e prestedigitação', inline: true},
    {name: 'Equipamentos:', value: 'Quaisquer duas armas simples de sua escolha \nbesta leve e 20 dardos \n(a) Armadura de coura batido ou (b) armadura segmentada ', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/artificer/'},
    {name: 'Para habilidades de classe:', value: 'http://dnd5e.wikidot.com/artificer'}
    )
  .setImage('https://dreionsden.files.wordpress.com/2019/12/artificer.png')
module.exports.artificeEmb = artificeEmb;
```
