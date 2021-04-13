const Discord = require("discord.js")

const ola = require("./ComandsEmb");
const classe = require("./ComandsEmb");
const raca = require("./ComandsEmb");
const magia = require("./magiaEmb");
const mecanicas = require("./embeds/mecanicasemb");
const acoes = require("./embeds/acoesemb");
const help = require("./ComandsEmb");

const artifice = require("./embed");
const barbaro = require("./embed");
const bardo = require("./embed");
const bruxo = require("./embed");
const clerigo = require("./embed");
const druida = require("./embed");
const feiticeiro = require("./embed");
const guerreiro = require("./embed");
const ladino = require("./embed");
const mago = require("./embed");
const paladino = require("./embed");
const patrulheiro = require("./embed");
const monge = require("./embed");

module.exports = async function (msg){
  if (msg.author.bot) return

  if (msg.content === "§artifice" || msg.content === "§Artifice"){
    msg.channel.send(artifice.artificeEmb)
  }

  if(msg.content.startsWith("§nude") || msg.content.startsWith("§raba") ){
    msg.reply("jájá chega na sua DM, meu bem rsrsrs ")
  }

  if (msg.content === "§barbaro"){
    msg.channel.send(barbaro.barbaroEmb)
  }

  if (msg.content === "§bardo"){
    msg.channel.send(bardo.bardoEmb)
  }

  if (msg.content === "§bruxo"){
    msg.channel.send(bruxo.bruxoEmb)
  }

  if (msg.content === "§clerigo"){
    msg.channel.send(clerigo.clerigoEmb)
  }

  if (msg.content === "§druida"){
    msg.channel.send(druida.druidaEmb)
  }

  if (msg.content === "§feiticeiro"){
    msg.channel.send(feiticeiro.feiticeiroEmb)
  }

  if (msg.content === "§guerreiro"){
    msg.channel.send(guerreiro.guerreiroEmb)
  }

  if (msg.content === "§ladino"){
    msg.channel.send(ladino.ladinoEmb)
  }

  if (msg.content === "§monge"){
    msg.channel.send(monge.mongeEmb)
  } 

  if (msg.content === "§mago"){
    msg.channel.send(mago.magoEmb)
  }

  if (msg.content === "§paladino"){
    msg.channel.send(paladino.paladinoEmb)
  }

  if (msg.content === "§patrulheiro"){
    msg.channel.send(patrulheiro.patrulheiroEmb)
  }

  if (msg.content === "§caçador"){
    msg.reply('caçador não é a tradução oficial de "ranger", tente §patrulheiro ')
  }

  if (msg.content === "§ola" || msg.content === "§olá"){
    msg.channel.send(ola.olaEmb)
  } 

  if (msg.content === "§classe"){
    msg.channel.send(classe.classeEmb)
  }

  if (msg.content === "§raca" || msg.content ==="§raça"){
    msg.channel.send(raca.racaEmb)
  }

  if (msg.content === "§magias"){
    msg.channel.send(magia.otimizacaoEmb)
  }

  if (msg.content === "§mecanicas"){
    msg.channel.send(mecanicas.mecanicasEmb)
  }

  if (msg.content === "§ações"){
    msg.channel.send(acoes.acoesEmb)
  }

  if (msg.content === "§help"){
    msg.channel.send(help.helpEmb)
  }

}