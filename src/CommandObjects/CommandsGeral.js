const comandos = require('../embeds/ComandsEmb');
const magia = require('../embeds/magiaEmb');
const mecanicas = require('../embeds/mecanicasemb');
const acoes = require('../embeds/acoesemb');

const CommandsGerais = {
	ola: (msg) => {msg.channel.send({ embeds: [comandos.olaEmb] });}, olá: (msg) => {msg.channel.send({ embeds: [comandos.olaEmb] });},
	classe: (msg) => {msg.channel.send({ embeds: [comandos.classeEmb] });},
	raça: (msg) => {msg.channel.send({ embeds: [comandos.racaEmb] });}, raças: (msg) => {msg.channel.send({ embeds: [comandos.racaEmb] });},
	magias: (msg) =>{msg.channel.send({ embeds: [magia.otimizacaoEmb] });},
	mecanicas: (msg) => {msg.channel.send({ embeds: [mecanicas.mecanicasEmb] });},
	ações: (msg) => {msg.channel.send({ embeds: [acoes.acoesEmb] });},
	help: (msg) => {msg.channel.send({ embeds: [comandos.helpEmb] });},
};

module.exports = CommandsGerais;