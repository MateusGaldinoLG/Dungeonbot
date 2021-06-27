const Discord = require("discord.js")

const mecanicasEmb = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Mecânicas Básicas')
    .setDescription('Mecânicas básicas do Dungeons and Dragons: \n**Desvantagem**: para vantagem, role 2d20 e pegue o melhor. Para desvantagem, o pior. \n**Frações**: sempre arredonde para baixo. \n**Inspiração**: o mestre pode dar inspiração a um jogador quando ele interpreta seu personagem como definido pelos ideias, vinculos, etc. Garante vantagem a uma única rolagem, e não é cumulativo. Jogadores podem doar sua inspiração a outros. \n**Testes em grupos**: todos os envolvidos fazem o mesmo teste. Se pelo enos metade do grupo igualar a CD, a ação tem sucesso \n**Testes passivos**: 10 + modificador + vantagem (+5) ou desvantagem(-5) \n**Disputas**: ambos os lados rolam seus testes e os resultados são comparados aos do(s) oponente(s) e não a uma CD. Se houver empate, a situação permanece igual (ex: um lado empurrando uma porta e o outro segurando) ou nenhum dos lados tem sucesso (ambos tentando pegar o mesmo item) \n**Ações livres**: sacar uma espada, pegar uma poção da mochila, etc. não precisam de uma ação. \n**Reações**: máximo de uma reação por rodada. Você não pode fazer outra reação até o início do seu próximo turno.')

module.exports.mecanicasEmb = mecanicasEmb;