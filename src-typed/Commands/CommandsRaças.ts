import * as racas from "../racas/racas";

interface ICommandsRaças{
    elfo: command;
    anão: command;
    anao: command;
    halfling: command;
    humano: command;
    draconato: command;
    gnomo: command;
    meioelfo: command;
    meioorc: command;
    MeioElfo: command;
    MeioOrc: command;
    tiefling: command;
}

const Racas: ICommandsRaças = {
    elfo: (msg: channel) => {msg.send(racas.elfos)},
    anão: (msg: channel) => {msg.send(racas.anoes)}, anao: (msg: channel) => {msg.send(racas.anoes)},
    halfling: (msg: channel) => {msg.send(racas.halfling)},
    humano: (msg: channel) => {msg.send(racas.humano)},
    draconato: (msg: channel) => {msg.send(racas.draconato)},
    gnomo: (msg: channel) => {msg.send(racas.gnomo)},
    meioelfo: (msg: channel) => {msg.send(racas.meioElfo)}, MeioElfo: (msg: channel) => {msg.send(racas.meioElfo)},
    meioorc: (msg: channel) => {msg.send(racas.meioOrc)}, MeioOrc: (msg: channel) => {msg.send(racas.meioOrc)},
    tiefling: (msg: channel) => {msg.send(racas.tiefling)}
}

class CommandsRacas{
    Racas: ICommandsRaças = Racas;

    isRaça(entrada: string): boolean{
        if(Object.keys(this.Racas).includes(entrada)){
            return true
        } else{
            return false
        }
    }

    sendMessage(raça: string, channel: channel): void{
        let RaçaKey = raça as keyof ICommandsRaças;
        Racas[RaçaKey](channel);
    }

}

export {CommandsRacas}