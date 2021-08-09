const setSuggestions = require('./OutrosComandos/suggestionsController');
const magiasCommand = require('./magias/magiasCommand');

const CommandsGerais = require('./CommandObjects/CommandsGeral');
const CommandsClasses = require('./CommandObjects/CommandsClasse');
const CommandsRacas = require('./CommandObjects/CommandsRacas');

module.exports = async function(msg) {
	if (msg.author.bot) return;

	let tokens = msg.content.split(' ');
	let command = tokens.shift();
	if(command.charAt(0) === '§') {
		command = command.substring(1);
		// command for meio-elfo and meio-orc
		command = command.replace('-', '');

		if(command in CommandsClasses) {
			CommandsClasses[command](msg);
		}
		else if (command in CommandsGerais) {
			CommandsGerais[command](msg);
		}
		else if(command in CommandsRacas) {
			CommandsRacas[command](msg);
		}
	}

	if (msg.content === '§caçador') {
		msg.reply({ content: 'caçador não é a tradução oficial de "ranger", tente §patrulheiro ', ephemeral: true });
	}

	if(msg.content.startsWith('§sugestoes') || msg.content.startsWith('§sugestões')) {
		setSuggestions(msg, tokens);
	}

	if(msg.content.startsWith('§magia ')) {
		tokens = tokens.join('-');
		magiasCommand(msg, tokens);
	}
};
