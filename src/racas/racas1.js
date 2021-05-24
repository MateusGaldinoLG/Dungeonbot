const Discord = require("discord.js")

const elfos = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Elfos')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,50 e 1,80 m \nPeso: de 50kg a 72kg\nExpectativa de vida: 750 anos \n '},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Destreza \nDeslocamento: 9 metros\n Visão no Escuro: até 18 metros \nProficiencia: percepção \n**Ancestral Feérico**: vantagem em testes de resistencia a ser enfeitiçado e magias não podem colocá-los para dormir \n**Transe**: meditam profundamente 4 horas por dia \nIdiomas: Comum e élfico'},
    {name: 'Alto Elfo:', value: '+1 em inteligência \nProficiencias: espadas longas, espadas curtas, arcos longos e arcos curtos', inline: true},
    {name: 'Elfo da floresta:', value: '+1 em sabedoria \nProficiencias: espadas longas, espadas curtas, arcos longos, arcos curtos \nDeslocamento: aumentado para 10,5m \nFacilidade de se esconder em folhagem, chuva forte, neve, nevoa ou outro fenomeno natural.', inline: true},
    {name: 'Elfo Negro (Drow):', value: '+1 em carisma \nVisão no escuro: 36m \nDesvantagem em ataques e testes de sabedoria relacionados a visão (percepção) quando no sol \nTruques: **globos de luz**, no nível 3 e **escuridão**, no nível 5 \nProficiencias: rapieiras, espadas curtas e bestas de mão', inline: true}
    )

//
const anoes = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Anões')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,20 e 1,50 m \nPeso: cerca de 75kg\nExpectativa de vida: 350 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Constituição \nDeslocamento: 7,5 metros\n Visão no Escuro: até 18 metros \n**Resiliência Anã**: vantagem em testes de resistencia contra venenos e contra dano de veneno \nProficiencias: machados de batalha, machadinhas, martelos leves e martelos de guerra \nEspeciaçização em rochas: ganha o dobro de bonus proficiência em história quando for relaciona à origem de um trabalho em pedra \n Proficiencia em uma ferramente de artesão: ferramentas de ferreiro, suprimentos de cervejaria ou ferramentas de pedreiro  \nIdiomas: Comum e Anão'},
    {name: 'Anão da Colina:', value: '+1 em sabedoria \n **Tenacidade Anã**: Máximo de pontos de vida aumentado em 1 e, cada vez que for subir de nível, recebe 1 ponto de vida adicional', inline: true},
    {name: 'Anão da Montanha:', value: '+2 em força \nProficiencias: armaduras leves e médias', inline: true}
    )
//


module.exports.elfos = elfos;
module.exports.anoes = anoes;