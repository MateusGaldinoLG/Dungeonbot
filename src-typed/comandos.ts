import {Message} from "discord.js";

import {CommandsRacas} from "./Commands/CommandsRaças"

const raças = new CommandsRacas();

async function ComandosHandle({author, content, channel}: Message){
    if(author.bot) return;

    let tokens = content.split(" ");
    let command = tokens.shift();

    if(command?.charAt(0) === "§"){
        command = command.substring(1);
        command = command.replace('-','');

        if(raças.isRaça(command)){
            raças.sendMessage(command, channel);
        }

    }
}

export {ComandosHandle};