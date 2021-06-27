const Discord = require("discord.js")

const acoesEmb = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Ações em combates')
    .setDescription('Ações em combates: \n**Atacar**: usar regras de ataque \n**Conjugar magias**: usar regras de magia \n**Correr**: mover-se o dobro, custa uma ação \n**Desengajar**: usando esta ação, seu movimento não provoca ataques de oportunidade \n**Desviar**: impões desvantagem a atacantes e vantagem em testes de resistência de destreza \n**Ajudar**: aliado a até 1,5m tem vantagem \n**Esconder-se**: teste de destreza(furtividade) contra um teste passivo de Sabedoria de quem puder vê-lo esconder-se ou teste ativo de uma criatura procurando por você. Um ataque escondido tem vantagem, geralmente revela a posição \n**Preparar**: sacrificar ação atual para ter uma reação automática a algum gatilho especificado \n**procurar**: faz um teste de sabedoria(percepção) ou inteligência(investigação) \n**Usar um objeto**: objetos que precisam de interação específica, como uma poção')

module.exports.acoesEmb = acoesEmb;