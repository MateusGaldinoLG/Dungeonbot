const classes = require("../embeds/embed");

const CommandsClasses = {
    artifice: (msg) =>{msg.channel.send(classes.artificeEmb)},
    barbaro: (msg) =>{msg.channel.send(classes.barbaroEmb)},
    bardo: (msg) =>{msg.channel.send(classes.bardoEmb)},
    bruxo: (msg) =>{msg.channel.send(classes.bruxoEmb)},
    clerigo: (msg) =>{msg.channel.send(classes.clerigoEmb)},
    druida: (msg) =>{ msg.channel.send(classes.druidaEmb)},
    feiticeiro: (msg) =>{msg.channel.send(classes.feiticeiroEmb)},
    guerreiro: (msg) =>{msg.channel.send(classes.guerreiroEmb)},
    ladino: (msg) =>{msg.channel.send(classes.ladinoEmb)},
    mago: (msg) => {msg.channel.send(classes.magoEmb)},
    monge: (msg) =>{msg.channel.send(classes.mongeEmb)},
    paladino: (msg) =>{msg.channel.send(classes.paladinoEmb)},
    patrulheiro: (msg) =>{msg.channel.send(classes.patrulheiroEmb)},
}

module.exports = CommandsClasses;