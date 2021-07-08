const sugestoes = require("./OutrosComandos/getsuggestion");
const magiasCommand = require("./magias/magiasCommand");

const CommandsGerais = require("./CommandObjects/CommandsGeral");
const CommandsClasses = require("./CommandObjects/CommandsClasse")
const CommandsRacas = require("./CommandObjects/CommandsRacas");

module.exports = async function (msg){
  if (msg.author.bot) return

  let tokens = msg.content.split(" ");
  let command = tokens.shift();
  if(command.charAt(0) === "§"){
    command = command.substring(1);
    command = command.replace('-', ''); //command for meio-elfo and meio-orc

    if(command in CommandsClasses){
      CommandsClasses[command](msg);
    }
    else if (command in CommandsGerais){
      CommandsGerais[command](msg);
    }
    else if(command in CommandsRacas){
      CommandsRacas[command](msg);
    }
  }

  if (msg.content === "§caçador"){
    msg.reply('caçador não é a tradução oficial de "ranger", tente §patrulheiro ')
  }
  
  if(msg.content.startsWith("§sugestoes") || msg.content.startsWith("§sugestões")){
    sugestoes(msg,tokens)
  }

  if(msg.content.startsWith("§magia ")){
    tokens = tokens.join('-');
    magiasCommand(msg, tokens);
  }
}
