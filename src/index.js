const { Client, Intents } = require('discord.js');
const keepAlive = require('./server');
// optional
require('dotenv').config();
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

console.log('Bot on');

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag} !`);
});

const comandos = require('./comandos');
client.on('messageCreate', comandos);

keepAlive();
// insert your bot token here
client.login(`${process.env.BOT_KEY}`);
