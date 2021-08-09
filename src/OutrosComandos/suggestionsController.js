const SuggestionsRepository = require('./suggestionsRepository');
require('dotenv').config();

const suggestionsRepository = new SuggestionsRepository();

module.exports = function setSuggestions(msg, tokens) {
	console.log('Sugestão adicionada');

	const sugestao = tokens.join(' ');

	// set the keyword in the .env file
	if(tokens[0] === process.env.DB_MANAGER_PASSWORD) {
		adminSuggestionsHandle(msg, tokens);
	}else if(tokens.length !== 0) {
		// add suggestions
		suggestionsRepository.addSuggestion(sugestao)
			.catch((e)=>{
				console.error(e);
				msg.reply('Um erro ocorreu, por favor tentar mais tarde');
			})
			.then(msg.reply('Sugestão adicionada com sucesso'));
	} else{
		msg.reply('Sua sugestão deu erro, ela está vazia. Tente novamente.');
	}
};

function adminSuggestionsHandle(msg, tokens) {
	// §sugestoes [keyword]
	if(tokens[1] === '') {
		suggestionsRepository.findAllSuggestions()
			.catch((e)=>{
				console.error(e);
				msg.reply('Um erro ocorreu, por favor tentar mais tarde');
			})
			.then((res)=>{
				msg.channel.send({ embed: {
					title: 'all suggestions',
					description: res,
				} });
			});
	}
	// §sugestoes [keyword] update
	else if(tokens[1] == 'update') {
		const id = Math.floor(tokens[2]);
		if(!isNaN(id)) {
			suggestionsRepository.updateSuggestion(tokens[2])
				.catch((e)=>{
					console.error(e);
					msg.reply('Um erro ocorreu, por favor tentar mais tarde');
				})
				.then(msg.reply('update concluido'));
		}
	}
	// §sugestoes [keyword] delete
	else if(tokens[1] == 'delete') {
		suggestionsRepository.deleteAllClosedSuggestions()
			.catch((e)=>{
				console.error(e);
				msg.reply('Um erro ocorreu, por favor tentar mais tarde');
			})
			.then(msg.reply('Closed suggestions deleted'));
	}
	// §sugestoes [keyword] open
	else if (tokens[1] == 'open') {
		suggestionsRepository.findAllOpenSuggestions()
			.catch((e)=>{
				console.error(e);
				msg.reply('Um erro ocorreu, por favor tentar mais tarde');
			})
			.then((res)=>{
				msg.channel.send({ embed: {
					title: 'all suggestions',
					description: res,
				} });
			});
	}
}
