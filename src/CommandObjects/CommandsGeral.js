const comandos = require("../embeds/ComandsEmb");
const magia = require("../embeds/magiaEmb");
const mecanicas = require("../embeds/mecanicasemb");
const acoes = require("../embeds/acoesemb");

const CommandsGerais = {
    ola: (msg) => {msg.channel.send(comandos.olaEmb)}, olá: (msg) => {msg.channel.send(comandos.olaEmb)},
    classe: (msg) => {msg.channel.send(comandos.classeEmb)},
    raça: (msg) => {msg.channel.send(comandos.racaEmb)}, raças: (msg) => {msg.channel.send(comandos.racaEmb)},
    magias: (msg) =>{msg.channel.send(magia.otimizacaoEmb)},
    mecanicas: (msg) => {msg.channel.send(mecanicas.mecanicasEmb)},
    ações: (msg) => {msg.channel.send(acoes.acoesEmb)},
    help: (msg) => {msg.channel.send(comandos.helpEmb)}
}

module.exports = CommandsGerais;