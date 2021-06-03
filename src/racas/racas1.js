const Discord = require("discord.js")

const elfos = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Elfos')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,50 e 1,80 m (médio) \nPeso: de 50kg a 72kg\nExpectativa de vida: 750 anos \n '},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Destreza \nDeslocamento: 9 metros\n Visão no Escuro: até 18 metros \nProficiencia: percepção \n**Ancestral Feérico**: vantagem em testes de resistencia a ser enfeitiçado e magias não podem colocá-los para dormir \n**Transe**: meditam profundamente 4 horas por dia \nIdiomas: Comum e élfico'},
    {name: 'Alto Elfo:', value: '+1 em inteligência \nProficiencias: espadas longas, espadas curtas, arcos longos e arcos curtos', inline: true},
    {name: 'Elfo da floresta:', value: '+1 em sabedoria \nProficiencias: espadas longas, espadas curtas, arcos longos, arcos curtos \nDeslocamento: aumentado para 10,5m \nFacilidade de se esconder em folhagem, chuva forte, neve, nevoa ou outro fenomeno natural.', inline: true},
    {name: 'Elfo Sombrio (Drow):', value: '+1 em carisma \nVisão no escuro: 36m \nDesvantagem em ataques e testes de sabedoria relacionados a visão (percepção) quando no sol \nTruques: **globos de luz**, no nível 3 e **escuridão**, no nível 5 \nProficiencias: rapieiras, espadas curtas e bestas de mão', inline: true}
    )

//
const anoes = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Anões')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,20 e 1,50 m (médio) \nPeso: cerca de 75kg\nExpectativa de vida: 350 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Constituição \nDeslocamento: 7,5 metros\n Visão no Escuro: até 18 metros \n**Resiliência Anã**: vantagem em testes de resistencia contra venenos e contra dano de veneno \nProficiencias: machados de batalha, machadinhas, martelos leves e martelos de guerra \nEspeciaçização em rochas: ganha o dobro de bonus proficiência em história quando for relaciona à origem de um trabalho em pedra \n Proficiencia em uma ferramente de artesão: ferramentas de ferreiro, suprimentos de cervejaria ou ferramentas de pedreiro  \nIdiomas: Comum e Anão'},
    {name: 'Anão da Colina:', value: '+1 em sabedoria \n **Tenacidade Anã**: Máximo de pontos de vida aumentado em 1 e, cada vez que for subir de nível, recebe 1 ponto de vida adicional', inline: true},
    {name: 'Anão da Montanha:', value: '+2 em força \nProficiencias: armaduras leves e médias', inline: true}
    )
//

const halfling = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Halfling')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: cerca de 0,90 m (pequeno) \nPeso: cerca de 20kg\nExpectativa de vida: 150 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Destreza \nDeslocamento: 7,5 metros\n Sortudo: quando obtiver um 1 natural em uma jogada de ataque, teste de habilidade ou teste de resistência, você pode jogar de novo o dado e utilizar o segundo resultado \nBravura: vantagem em testes de resistência contra ficar amedrontado \n**Agilidade Halfling**: pode mover-se através do espaço de qualquer criatura que for de um tamanho mair que o seu \nIdiomas: Comum e Halfling'},
    {name: 'Halfling Pés Leves:', value: '+1 em carisma \n **Furtividade natural**: você pode tentar se esconder mesmo quando possuir apenas a cobertura de uma criatura que for no mínimo um tamanho maior que o seu', inline: true},
    {name: 'Halfling Robusto:', value: '+1 em constituição \n**Resiliência dos robustos**: vantagem em teste de resistência contra veneno e tem resistência contra dano de veneno', inline: true}
    )
//

const humano = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Humano')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: variam entre 1,50 e 1,80 m (médio) \nPeso: variado \nExpectativa de vida: menos de um século'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +1 em todos \nDeslocamento: 9 metros\n \nIdiomas: Comum e outro idioma de escolha'}
    )
//

const draconato = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Draconato')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: possuem mais de 1,80m (médio) \nPeso: mais de 1250kg \nExpectativa de vida: 80 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Força e +1 em Carisma \nDeslocamento: 9 metros\n **Ancestral Dracônico**: cada draconato possui um ancestral dracônico, que determian sua arma de sopro e resistência a dano \nArma de sopro: você pode usar uma ação para exalar energia destrutiva. Seu ancestral dracônico determina o tamanho, formato e tipo de dado que você expele. Quando você usa sua arma de sopro, cada criatura na área exalada deve realisar um teste de resistência, determinado pelo seu ancestral dracônico. Sendo a CD do teste 8 + seu modificador de Constituição + seu bônus de proficiencia. A criatura sofre 2d6 de dano num fracasso e metade de dano em um sucesso, aumentando para 3d6 no 6º nível, 4d6 no 11º nível e 5d6 no 16º. Ela só pode ser utilizada uma vez por descanso curto ou longo \nResistência a dano: você possui resistência a dano associado ao seu ancestral dracônico \nIdiomas: Comum e Dracônico'},
    {name: 'Ancestrais dracônicos:', value: 'Azul: dano elétrico - arma de sopro: linha de 1,5m/9m (teste de Des) \nBranco: dano de frio - arma de sopro: cone de 4,5m (teste de con) \nBronze: dano elétrico - arma de sopro: linha de 1,5m/9m (teste de des) \nCobre: dano ácido - arma de sopro: linha de 1,5/9m (teste de des) \nLatão: dano de fogo - arma de sopro: linha de 1,5/9m (teste de des) \nNegro: dano ácido - arma de sopro: linha de 1,5/9m (teste de des) \nOuro: dano de fogo - arma de sopro: cone de 4,5m (teste de des) \nPrata: frio - arma de sopro: cone de 4,5m (teste de con) \nVerde: veneno - arma de sopro: cone de 4,5m (teste de con) \nVermelho: fogo - arma de sopro: cone de 4,5m (teste de des)'}
    )
//

const gnomo = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('Gnomo')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: cerca de 0,90 a 1,20 metro (pequeno) \nPeso: cerca de 20kg\nExpectativa de vida: 350 a 500 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Inteligência \nDeslocamento: 7,5 metros \nVisão no Escuro: 18 metros \n**Esperteza Gnômica**: possui vantagens em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia \nIdiomas: Comum e Gnômico'},
    {name: 'Gnomo da Floresta:', value: '+1 em Destreza \n**Ilusionista nato**: você conhece o truque ilusão menor. Inteligência é sua habilidade para conjurá-la \nFalar com bestas pequenas: através de sons e gestos, você pode comunicar ideias simples para Bestas pequenas e menores', inline: true},
    {name: 'Gnomo das rochas:', value: '+1 em constituição \n**Conhecimento de artifice:**: toda vez que fizer um teste de Inteligência(História) relacionado a itens mágicos, objetos alquímicos ou mecanismos tecnológicos, você pode adicionar o dobro do seu bônus de proficiencia, ao invés de qualquer bônus de proficiencia que você normalmente use \nEngenhoqueiro: proficiencia com armas de artesão (ferramentas de engenhoqueiro). Com essas ferramentas, você pode gastar 1 hora e 10 po em materiais para construir um mecanismo Miúdo (CA 5, 1pv), que para de funcionar a partir de 24 horas (a não ser que seja gasto 1 hora reparando-o) ou quando você usa a ação de desmantelá-lo, que recupera os materiais de criação.  É possível ter três desses mecanismo funcionando ao mesmo tempo', inline: true},
    {name:'mecanismos', value: 'Brinquedo mecânico \nIsqueiro mecânico \nCaixa de música'}
    )
//

const meioElfo = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('meio-elfo')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,50 e 1,80 (médio) \nPeso: entre 50kg e 80kg \nExpectativa de vida: 180 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Carisma e +1 em outros dois valores de habilidade a sua escolha \nDeslocamento: 9 metros \nVisão no escuro: até 18 metros \n**Ancestral Feérico**: vantagem em testes de resistência contra encantamento e magia não pode colocar você para dormir \nVersatilidade em perícia: você ganha proficiencia em duas perícias a sua escolha \nIdiomas: Comum, Élfico e mais um idioma de sua escolha'}
    )
//

const meioOrc = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('meio-orc')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,80 e 2,10 (médio) \nPeso: entre 90kg e 125kg \nExpectativa de vida: 75 anos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Força e +1 em Constituição \nDeslocamento: 9 metros \nVisão no escuro: até 18 metros \nAmeaçador: você adquire proficiência na perícia Intimidação \nAtaques Selvagens: Quando você atinge um ataque crítico com uma arma corpo-a-corpo, você pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano extra causado pelo acerto crítico \nIdiomas: Comum e Orc'}
    )
//

const tiefling = new Discord.MessageEmbed() 
    .setColor('#0099ff')
    .setTitle('tiefling')
    .addFields(
    {name: 'Detalhes de raça: ', value: 'Tamanho: entre 1,20 e 1,50 (médio) \nPeso: mesmo que os humanos \nExpectativa de vida: mesmo tempo que os humanos'},
    {name: 'Traços raciais:', value: 'Valor de habilidade: +2 em Carisma e +1 em Inteligência \nDeslocamento: 9 metros \nVisão no escuro: até 18 metros \n**Resistência Infernal**: você possui resistência a dano de fogo \n**Legado Infernal**: você conhece o truque *taumartugia*. Quando você atingir o nível 3, você poderá conjugar a magia *represensão infernal* uma vez por dia como uma magia de 2ª nível. Quando você atingir o 5ª nível, você também poderá conjurar a magia *escuridão*. Você precisa terminar um descanso longo para poder usar as magias desse traço novamente. Sua habilidade de conjuração para essas magias é Carisma  \nIdiomas: Comum e Infernal'}
    )
//

module.exports.elfos = elfos;
module.exports.anoes = anoes;
module.exports.halfling = halfling;
module.exports.humano = humano;
module.exports.draconato = draconato;
module.exports.gnomo = gnomo;
module.exports.meioElfo = meioElfo;
module.exports.meioOrc = meioOrc;
module.exports.tiefling = tiefling;