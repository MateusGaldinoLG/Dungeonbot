const Discord = require("discord.js")
const keepAlive = require("./server")
require('dotenv').config(); //optional
const client = new Discord.Client()

console.log("Bot on")

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag} !`)
} )

const comandos = require("./comandos")
client.on("message", comandos)

keepAlive()
client.login(`${process.env.BOT_KEY}`)//insert your bot token here
