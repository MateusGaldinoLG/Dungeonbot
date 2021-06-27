import { DMChannel, NewsChannel, TextChannel } from "discord.js";

declare global{
    type channel = TextChannel | DMChannel | NewsChannel;
    type command = (msg: channel) => void;
}