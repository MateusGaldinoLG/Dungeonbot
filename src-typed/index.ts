import Discord, { Message } from "discord.js";
import {keepAlive} from "./server";
import dotenv from "dotenv";
dotenv.config();
import { ComandosHandle } from "./comandos";

const client = new Discord.Client();

console.log("Bot on");

client.once("ready", ()=>{
    console.log(`Logged in as ${client.user?.tag} !`);
});

client.on("message", ComandosHandle);

keepAlive();

client.login(`${process.env.BOT_KEY}`)
