const Discord = require("discord.js")

//TODO bugou
const otimizacaoEmb = new Discord.MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Magias: otimização e mais')
    .setDescription('Links para listas de magias e otimização, assim como mecânicas legais')
    .addFields(
        {name: 'Otimização de magias', value: 'Artifice: https://rpgbot.net/dnd5/characters/classes/artificer/spells.html \nBardo: https://rpgbot.net/dnd5/characters/classes/bard/spells.html \nBruxo: https://rpgbot.net/dnd5/characters/classes/warlock/spells.html \nClerigo: https://rpgbot.net/dnd5/characters/classes/cleric/spells.html \nDruida: https://rpgbot.net/dnd5/characters/classes/druid/spells.html \nFeiticeiro:  https://rpgbot.net/dnd5/characters/classes/sorcerer/spells.html \nMago: https://rpgbot.net/dnd5/characters/classes/wizard/spells.html \nPaladino: https://rpgbot.net/dnd5/characters/classes/paladin/spells.html'},
        {name: 'Pesquisa Rápida de magias', value: 'Para pesquisar uma magia específica use o comando §magia com o nome da magia (em inglês) na frente, ex: §magia fireball'});
    
module.exports.otimizacaoEmb = otimizacaoEmb;