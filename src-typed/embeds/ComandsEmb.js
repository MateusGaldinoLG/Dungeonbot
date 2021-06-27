const Discord = require("discord.js")

const olaEmb = new Discord.MessageEmbed()
  .setColor('#0099ff')
	.setTitle('Apresentação')
  .setDescription('Olá, eu sou um bot para detalhes de D&D, com informações básicas e tabelas úteis sobre diversas coisas')
  .addFields(
    {name: 'Meus comandos são: ', value: '**§classe** -- podendo ser qualquer classe (como §monge, §mago, etc) \n**§Raça** -- podendo ser qualquer raça (como §elfo, §anão) \n**§magias** -- para sites com listas de magias e truques \n**§mecanicas** - para mecânicas básicas do jogo\n**§ações** - ações básicas do jogo e seus detalhes\n**§help** - para ajuda'}
  )
  .setFooter('Obrigade por utilizar, bom jogo')

const classeEmb = new Discord.MessageEmbed()
  .setColor('#0099ff')
	.setTitle('Classes')
  .setDescription('A descrição das classes possui detalhes da vida, periciais, itens iniciais e a tabela de nivel ')
  .addFields(
    {name: 'Comandos:', value: '§artifice\n§barbaro\n§bardo\n§bruxo\n§clerigo\n§druida\n§feiticeiro\n§guerreiro\n§ladino\n§mago\n§monge\n§paladino\n§patrulheiro'}
  )

const racaEmb = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Raças')
  .setDescription('Descrição das raças básicas de D&D 5e')
  .addFields(
    {name: 'Comandos:', value: '§anão \n§elfo \n§halfling \n§humano \n§draconato\ n§gnomo \n§meio-elfo \n§meio-orc \n§tiefling'}
  )

const magiaEmb = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Magias')
  .setDescription('Em construção')
  .setImage('https://bleedingcool.com/wp-content/uploads/2019/02/DD-Artificer-1200x628.jpg')

const helpEmb = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Help')
  .setDescription('Esse é o comando de ajuda do bot, os comandos estão anexados no **§ola**.')
  .addFields({name: "Problemas comuns:", value: "Alguns problemas possíveis são:\nAcentos e letras diferentes: é importante dizer que só alguns comandos como olá e raça possuem diferença de acento (isso será adicionado no futuro)\n Conteúdo: para conteúdos adicionais, existem duas opções: eles estão **em construção**, então eles serão adicionados logo, ou eles nem estão. No primeiro caso, espere alguns dias, no segundo caso, fale com o criador :)", inline: true},
  {name: "Redes sociais para indicação:", value: "Instagram: @mateus_glg\n Discord: Mateus G. Overdrive#6636", inline: true},
  {name: "Comando para sugestões", value:"Se você quer comunicar sugestões diretamente, digite §sugestões/sugestoes e posteriormente sua sugestão"}
  )
module.exports.olaEmb = olaEmb;
module.exports.classeEmb = classeEmb;
module.exports.racaEmb = racaEmb;
module.exports.magiaEmb = magiaEmb;
module.exports.helpEmb = helpEmb;
