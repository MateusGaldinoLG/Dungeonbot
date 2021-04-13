const Discord = require("discord.js")
const keepAlive = require("./server")
const client = new Discord.Client()

console.log("Bot on")

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag} !`)
} )

const comandos = require("./comandosteste")
client.on("message", comandos)

keepAlive()
client.login("ODIzMjA4MjU2MjM4MjU2MTU4.YFdebg.hCy0HCio9COqd7dBI5inpzBVxac")