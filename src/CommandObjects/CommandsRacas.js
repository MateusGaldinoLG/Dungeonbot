const racas = require('../racas/racas1');

const CommandsRacas = {
	elfo: (msg) => {msg.channel.send({ embeds: [racas.elfos] });},
	anão: (msg) => {msg.channel.send({ embeds: [racas.anoes] });}, anao: (msg) => {msg.channel.send({ embeds: [racas.anoes] });},
	halfling: (msg) => {msg.channel.send({ embeds: [racas.halfling] });},
	humano: (msg) => {msg.channel.send({ embeds: [racas.humano] });},
	draconato: (msg) => {msg.channel.send({ embeds: [racas.draconato] });},
	gnomo: (msg) => {msg.channel.send({ embeds: [racas.gnomo] });},
	meioelfo: (msg) => {msg.channel.send({ embeds: [racas.meioElfo] });}, MeioElfo: (msg) => {msg.channel.send({ embeds: [racas.meioElfo] });},
	meioorc: (msg) => {msg.channel.send({ embeds: [racas.meioOrc] });}, MeioOrc: (msg) => {msg.channel.send({ embeds: [racas.meioOrc] });},
	tiefling: (msg) => {msg.channel.send({ embeds: [racas.tiefling] });},
};

module.exports = CommandsRacas;