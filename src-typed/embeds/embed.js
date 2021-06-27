const Discord = require("discord.js")

const artificeEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Artifice')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Inteligência, seguido de Constituição ou Destreza \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves, armaduras médias e escudos \n Armas: armas simples \n Ferramentas: ferramenta do ladrão, ferramenta do construtor, um tipo de ferramenta de artesão de sua escolha \n Testes de resistência: Constituição, Inteligência \n Pericias: duas entre: arcanismo, história, investigação, medicina natureza, percepção e prestedigitação', inline: true},
    {name: 'Equipamentos:', value: 'Quaisquer duas armas simples de sua escolha \nbesta leve e 20 dardos \n(a) Armadura de coura batido ou (b) armadura segmentada ', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/artificer/'},
    {name: 'Para habilidades de classe:', value: 'http://dnd5e.wikidot.com/artificer'}
    )
  .setImage('https://dreionsden.files.wordpress.com/2019/12/artificer.png')

const barbaroEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Barbaro')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: força, seguido de constituição \n Vida base: 12 + constituição \n Dado de vida: 1d12 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves, armaduras médias e escudos \n Armas: armas simples, armas marciais \n Ferramentas: nenhuma \n Testes de resistência: Força, Constituição \n Pericias: duas entre: adestrar animais, atletismo, intimidação, natureza, percepção e sobrevivência', inline: true},
    {name: 'Equipamentos:', value: '(a) um machado grande ou (b) qualquer arma marcial corpo-a-corpo \n (a) dois machados de mão ou (b) qualquer arma simples \n Um pacote de aventureiro e quatro azagaias', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/barbarian/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Barbarian'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2016/08/d823c-barbaro_tabela.png')

const bardoEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Bardo')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: carisma, seguido de destreza \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves \n Armas: armas simples, bestas de mão, espadas longas, rapieras, espadas curtas \n Ferramentas: três instrumentos musicais a sua escolha \n Testes de resistência: destreza, carisma \n Pericias: escolha três quaisquer', inline: true},
    {name: 'Equipamentos:', value: '(a) uma rapiera ou (b) uma espada longa ou (c) qualquer arma simples \n (a) um pacote de diplomata ou (b) um pacote de artista \n (a) um lute ou (b) qualquer outro instrumento musical', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/bard/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Bard'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2016/10/DD5_O_Bardo.png?resize=760%2C528')

const bruxoEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Bruxo')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: carisma, seguido de constituição \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves \n Armas: armas simples \n Ferramentas: nenhuma \n Testes de resistência: sabedoria, carisma \n Pericias: escolha duas entre arcanismo, enganação, história, intimidação, investigação, natureza e religião', inline: true},
    {name: 'Equipamentos:', value: '(a) uma besta leve e 20 virotes ou (b) qualquer arma simples \n (a) uma bolsa de componentes ou (b) um foco arcano \n (a) um pacote de estudos ou (b) um pacote de explorador \n Armadura de couro, qualquer arma simples e duas adagas', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/warlock/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Warlock'}
    )
  .setImage('https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2016/11/DD5_Tabela_O_Bruxo.jpg')  

const clerigoEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Clerigo')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: sabedoria, seguido de força ou constituição \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves, armaduras médias, escudos \n Armas: todas as armas simples \n Ferramentas: nenhuma \n Testes de resistência: sabedoria, carisma \n Pericias: escolha duas entre história, intuição, medicina,persuasão e religião', inline: true},
    {name: 'Equipamentos:', value: '(a) uma maça ou (b) um martelo de guerra (se for proficiente) \n (a) brunea, (b) armadura de couro ou (c) cota de malha (se for proficiente) \n (a) uma besta leve e 20 virotes ou (b) qualquer arma simples \n (a) um pacote de sacerdote ou (b) um pacote de aventureiro \n Um escudo e um símbolo sagrado', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/cleric/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Cleric'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2016/12/DD5_Clerigo_tabela_evolucao.png') 

const druidaEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Druida')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: sabedoria, seguido de constituição \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves, armaduras médias, escudos (druidas não irão vestir armaduras ou usar escudos feitos de metal) \nArmas: clavas, adagas, dardos, azagaias, maças, bordões,cimitarras, foices, fundas e lanças \nFerramentas: kit de herbalismo \nTestes de resistência: inteligência, sabedoria \n Pericias: escolha duas entre arcanismo, adestrar animais, intuição, medicina, natureza, percepção, religião e sobrevivência', inline: true},
    {name: 'Equipamentos:', value: '(a) um escudo de madeira ou (b) qualquer arma simples \n(a) uma cimitarra ou (b) qualquer arma corpo-a-corpo simples \n(a) um pacote de estudioso ou (b) um pacote de explorador \nArmadura de couro, um pacote de aventureiro e um foco druídico', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/druid/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Druid'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2016/12/DD5-druida-tabela.png') 

const feiticeiroEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Feiticeiro')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Carisma, seguido de Constituição \n Vida base: 6 + Constituição \n Dado de vida: 1d6 + modificador de Constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Nenhuma \nArmas: Adagas, dardos, fundas, bordões e bestas leves \nFerramentas: Nenhuma \nTestes de resistência: Constituição e Carisma \n Pericias: Escolha duas entre arcanismo,enganação, intuição, intimidação, persuasão e religião', inline: true},
    {name: 'Equipamentos:', value: '(a) uma besta leve e 20 virotes ou (b) qualquer arma simples \n(a) uma bolsa de componentes ou (b) um foco arcano \n(a) um pacote de explorador ou (b) um pacote de aventureiro', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/sorcerer/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Sorcerer'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2016/12/DD5_Tabela_Feiticeiro.png?resize=760%2C456')

const guerreiroEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Guerreiro')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Força ou Destreza, seguido de Constituição ou inteligência \n Vida base: 10 + Constituição \n Dado de vida: 1d10 + modificador de Constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: Todas as armaduras, escudos \nArmas: armas simples, armas marciais \nFerramentas: Nenhuma \nTestes de resistência: Força, Constituição \nPericias: Escolha duas entre acrobacia, adestrar animais, atletismo, história, intuição, intimidação, percepção e sobrevivência', inline: true},
    {name: 'Equipamentos:', value: '(a) cota de malha ou (b) gibão de peles, arco longo e 20 flechas \n(a) uma arma marcial e um escudo ou (b) duas armas marciais \n(a) uma besta leve e 20 virotes ou (b) dois machados de arremesso \n(a) pacote de aventureiro ou (b) um pacote de explorador', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/fighter/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/fighter'}
    )
  .setImage('https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2017/06/DD5_Guerreiro_Tabela.png?resize=583%2C730')

const ladinoEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Ladino')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Destreza, seguido de Inteligência ou Carisma \n Vida base: 8 + Constituição \n Dado de vida: 1d8 + modificador de Constituição'},
    {name: 'Proficiências:', value: 'Armadura: Armaduras leves \nArmas: armas simples, bestas de mão, espadas longas, rapieiras, espadas curtas \nFerramentas: Ferramentas de ladino \nTestes de resistência: Destreza, Inteligência \nPericias: Escolha quatro entre acrobacia, atletismo, atuação, enganação, furtividade, intimidação, intuição, investigação, percepção, persuasão e prestidigitação', inline: true},
    {name: 'Equipamentos:', value: '(a) uma rapieira ou (b) uma espada longa \n(a) um arco curto e uma aljava com 20 flechas ou (b) uma espada curta \n(a) um pacote de assaltante ou (b) um pacote de aventureiro ou (c) um pacote de explorador \nArmadura de couro, duas adagas e ferramentas de ladrão', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/rogue/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/rogue'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2017/07/DD5_Ladino-Tabela.png?resize=594%2C730')

const magoEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Mago')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Inteligência, seguido de Constituição ou Destreza \n Vida base: 6 + Constituição \n Dado de vida: 1d6 + modificador de Constituição'},
    {name: 'Proficiências:', value: 'Armadura: Nenhuma \nArmas: adagas, dardos, fundas, bordões, bestas leves \nFerramentas: Nenhuma \nTestes de resistência: Inteligência, Sabedoria \nPericias: Escolha duas entre arcanismo, história, intuição, investigação, medicina e religião', inline: true},
    {name: 'Equipamentos:', value: '(a) um bordão ou (b) uma adaga \n(a) uma bolsa de componentes ou (b) um foco arcano \n(a) um pacote de estudioso ou (b) um pacote de explorador \nUm grimório', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/wizard/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/wizard'}
    )
  .setImage('https://i1.wp.com/orbedosdragoes.com/wp-content/uploads/2018/01/DD5_Tabela_Evolucao_Mago.png')

const mongeEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Monge')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: destreza, seguido de sabedoria \n Vida base: 8 + constituição \n Dado de vida: 1d8 + modificador de constituição \n '},
    {name: 'Proficiências:', value: 'Armadura: nenhuma \n Armas: armas simples, espadas curtas \n Ferramentas: de artesão ou instrumento musical \n Testes de resistência: Força, Destreza \n Pericias: duas entre: acrobacia, atletismo, furtividade, história, intuição ou religião', inline: true},
    {name: 'Equipamentos:', value: '(a) uma espada curta ou (b) qualquer arma simples \n (a) um pacote de explorador ou (b) um pacote de aventureiro \n 10 dardos', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/monk/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/Monk'}
    )
  .setImage('https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2018/01/DD5_Monge_Tabela_Evolucao.png')

const paladinoEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Paladino')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Força, seguido de Carisma \n Vida base: 10 + Constituição \n Dado de vida: 1d10 + modificador de Constituição'},
    {name: 'Proficiências:', value: 'Armadura: Todas as armaduras, escudos \nArmas: armas simples, armas marciais \nFerramentas: Nenhuma \nTestes de resistência: Sabedoria, Carisma \nPericias: Escolha duas entre atletismo, intuição, intimidação, medicina, persuasão e religião', inline: true},
    {name: 'Equipamentos:', value: '(a) uma arma marcial e um escudo ou (b) duas armas marciais \n(a) cinco azagaias ou (b) qualquer arma simples corpo-a-corpo \n(a) um pacote de sacerdote ou (b) um pacote de aventureiro \nCota de malha e um símbolo sagrado', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/paladin/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/paladin'}
    )
  .setImage('https://i2.wp.com/orbedosdragoes.com/wp-content/uploads/2018/05/DD5-Evolucao-Paladino.png')

const patrulheiroEmb = new Discord.MessageEmbed() 
  .setColor('#0099ff')
	.setTitle('Patrulheiro')
  .addFields(
    {name: 'Características de classe: ', value: 'Valor de habilidade: Destreza, seguido de Sabedoria \n Vida base: 10 + Constituição \n Dado de vida: 1d10 + modificador de Constituição'},
    {name: 'Proficiências:', value: 'Armadura: armaduras leves, armaduras médias, escudos \nArmas: armas simples, armas marciais \nFerramentas: Nenhuma \nTestes de resistência: Força, Destreza \nPericias: Escolha três entre acrobacia, adestrar animais, atletismo, furtividade, intuição, investigação, natureza, percepção e sobrevivência', inline: true},
    {name: 'Equipamentos:', value: '(a) camisão de malha ou (b) armadura de couro \n(a) duas espadas curtas ou (b) duas armas simples corpo-a-corpo \n(a) um pacote de explorador ou (b) um pacote de aventureiro \nUm arco longo e uma aljava com 20 flechas', inline: true},
    {name: 'Para otimização:', value: 'https://rpgbot.net/dnd5/characters/classes/ranger/'},
    {name: 'Para habilidades de classe:', value: 'https://roll20.net/compendium/dnd5e/ranger'}
    )
  .setImage('https://i2.wp.com/orbedosdragoes.com/wp-content/uploads/2018/01/DD5-Tabela-Evolucao-Patrulheiro.png')


module.exports.artificeEmb = artificeEmb;
module.exports.barbaroEmb = barbaroEmb;
module.exports.bardoEmb = bardoEmb;
module.exports.bruxoEmb = bruxoEmb;
module.exports.clerigoEmb = clerigoEmb;
module.exports.druidaEmb = druidaEmb;
module.exports.feiticeiroEmb = feiticeiroEmb;
module.exports.guerreiroEmb = guerreiroEmb;
module.exports.ladinoEmb = ladinoEmb;
module.exports.magoEmb = magoEmb;
module.exports.paladinoEmb = paladinoEmb;
module.exports.patrulheiroEmb = patrulheiroEmb;
module.exports.mongeEmb = mongeEmb;