const axios = require('axios')
const magiaMessage = require('./magiasMessage')

module.exports = function magiaCommand(msg, tokens){
    tokens = tokens.toLowerCase();
    if(tokens === ''){
        msg.channel.send('Para pesquisar uma magia é necessário digitar seu nome, para ver detalhes gerais sobre magias digite §magias (com s)')
    }
    else{
        pesquisarMagia(msg, tokens).then((response) => {
            if(response !== null){
                msg.channel.send(magiaMessage(response.data))
            }
        });
    }
}

async function pesquisarMagia(msg, nomeMagia){
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${nomeMagia}`)
        return response;
    }catch(error){
        let status = error.response.status;
        retornarErro(msg, status)
        return null;
    }
}

function retornarErro(msg, status){
    if(status == 404){
        msg.reply('O nome de magia digitado não foi encontrado, tente novamente de outra forma');
    } else{
        msg.reply('Ocorreu um erro, tente novamente mais tarde');
    }
}