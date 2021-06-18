const ola = require("./embeds/ComandsEmb");
const classe = require("./embeds/ComandsEmb");
const raca = require("./embeds/ComandsEmb");
const magia = require("./embeds/magiaEmb");
const mecanicas = require("./embeds/mecanicasemb");
const acoes = require("./embeds/acoesemb");
const sugestoes = require("./OutrosComandos/getsuggestion");
const help = require("./embeds/ComandsEmb");

const artifice = require("./embeds/embed");
const barbaro = require("./embeds/embed");
const bardo = require("./embeds/embed");
const bruxo = require("./embeds/embed");
const clerigo = require("./embeds/embed");
const druida = require("./embeds/embed");
const feiticeiro = require("./embeds/embed");
const guerreiro = require("./embeds/embed");
const ladino = require("./embeds/embed");
const mago = require("./embeds/embed");
const paladino = require("./embeds/embed");
const patrulheiro = require("./embeds/embed");
const monge = require("./embeds/embed");

const racas = require("./racas/racas1")

const magiasCommand = require("./magias/magiasCommand");

const CommandsClasses = {
  artifice: (msg) =>{msg.channel.send(artifice.artificeEmb)},
  barbaro: (msg) =>{msg.channel.send(barbaro.barbaroEmb)},
  bardo: (msg) =>{msg.channel.send(bardo.bardoEmb)},
  bruxo: (msg) =>{msg.channel.send(bruxo.bruxoEmb)},
  clerigo: (msg) =>{msg.channel.send(clerigo.clerigoEmb)},
  druida: (msg) =>{ msg.channel.send(druida.druidaEmb)},
  feiticeiro: (msg) =>{msg.channel.send(feiticeiro.feiticeiroEmb)},
  guerreiro: (msg) =>{msg.channel.send(guerreiro.guerreiroEmb)},
  ladino: (msg) =>{msg.channel.send(ladino.ladinoEmb)},
  mago: (msg) => {msg.channel.send(mago.magoEmb)},
  monge: (msg) =>{msg.channel.send(monge.mongeEmb)},
  paladino: (msg) =>{msg.channel.send(paladino.paladinoEmb)},
  patrulheiro: (msg) =>{msg.channel.send(patrulheiro.patrulheiroEmb)},
}

const ComandsGerais = {
  ola: (msg) => {msg.channel.send(ola.olaEmb)}, olá: (msg) => {msg.channel.send(ola.olaEmb)},
  classe: (msg) => {msg.channel.send(classe.classeEmb)},
  raça: (msg) => {msg.channel.send(raca.racaEmb)}, raças: (msg) => {msg.channel.send(raca.racaEmb)},
  magias: (msg) =>{msg.channel.send(magia.otimizacaoEmb)},
  mecanicas: (msg) => {msg.channel.send(mecanicas.mecanicasEmb)},
  ações: (msg) => {msg.channel.send(acoes.acoesEmb)},
  help: (msg) => {msg.channel.send(help.helpEmb)}
}

const CommandsRacas = {
  elfo: (msg) => {msg.channel.send(racas.elfos)},
  anão: (msg) => {msg.channel.send(racas.anoes)}, anao: (msg) => {msg.channel.send(racas.anoes)},
  halfling: (msg) => {msg.channel.send(racas.halfling)},
  humano: (msg) => {msg.channel.send(racas.humano)},
  draconato: (msg) => {msg.channel.send(racas.draconato)},
  gnomo: (msg) => {msg.channel.send(racas.gnomo)},
  meioelfo: (msg) => {msg.channel.send(racas.meioElfo)}, MeioElfo: (msg) => {msg.channel.send(racas.meioElfo)},
  meioorc: (msg) => {msg.channel.send(racas.meioOrc)}, MeioOrc: (msg) => {msg.channel.send(racas.meioOrc)},
  tiefling: (msg) => {msg.channel.send(racas.tiefling)}
}

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
    else if (command in ComandsGerais){
      ComandsGerais[command](msg);
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

  if(msg.content.startsWith("§magia")){
    tokens = tokens.join('-');
    magiasCommand(msg, tokens);
  }
}
