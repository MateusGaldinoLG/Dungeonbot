const racas = require("../racas/racas1")

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

module.exports = CommandsRacas;