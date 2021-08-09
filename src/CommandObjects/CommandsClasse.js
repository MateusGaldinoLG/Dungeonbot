const classes = require('../embeds/embed');

const CommandsClasses = {
	artifice: (msg) =>{msg.channel.send({ embeds: [classes.artificeEmb] });},
	barbaro: (msg) =>{msg.channel.send({ embeds: [classes.barbaroEmb] });},
	bardo: (msg) =>{msg.channel.send({ embeds: [classes.bardoEmb] });},
	bruxo: (msg) =>{msg.channel.send({ embeds: [classes.bruxoEmb] });},
	clerigo: (msg) =>{msg.channel.send({ embeds: [classes.clerigoEmb] });},
	druida: (msg) =>{ msg.channel.send({ embeds: [classes.druidaEmb] });},
	feiticeiro: (msg) =>{msg.channel.send({ embeds: [classes.feiticeiroEmb] });},
	guerreiro: (msg) =>{msg.channel.send({ embeds: [classes.guerreiroEmb] });},
	ladino: (msg) =>{msg.channel.send({ embeds: [classes.ladinoEmb] });},
	mago: (msg) => {msg.channel.send({ embeds: [classes.magoEmb] });},
	monge: (msg) =>{msg.channel.send({ embeds: [classes.mongeEmb] });},
	paladino: (msg) =>{msg.channel.send({ embeds: [classes.paladinoEmb] });},
	patrulheiro: (msg) =>{msg.channel.send({ embeds: [classes.patrulheiroEmb] });},
};

module.exports = CommandsClasses;