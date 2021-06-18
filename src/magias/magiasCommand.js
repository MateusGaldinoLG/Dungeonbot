const axios = require('axios')
const magiaMessage = require('./magiasMessage')

module.exports = function magiaCommand(msg, tokens){
    tokens = tokens.toLowerCase();
    if(tokens === ''){
        msg.channel.send('Para pesquisar uma magia é necessário digitar seu nome, para ver detalhes gerais sobre magias digite §magias (com s)')
    }
    else{
        pesquisarMagia(msg, tokens).then((response) => {
            //msg.channel.send(magiaMessage(response.data.name, response.data.desc[0], response.data.range, response.data.higher_level));
            msg.channel.send(magiaMessage(response.data))
            //console.log(magiaMessage(response.data.name, response.data.desc[0], response.data.range[0]));
        });
    }
}

async function pesquisarMagia(msg, nomeMagia){
    try{
        const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${nomeMagia}`)
        //console.log(response.data.name);
        //console.log(response.data.desc[0]);
        //console.log(response.data.higher_level[0]);
        console.log(response.data.range);
        return response;
    }catch(error){
        //console.log(error);
        if(error.response.status == 404){
            msg.reply('O nome de magia digitado não foi encontrado, tente novamente de outra forma')
        } else{
            msg.reply('Ocorreu um erro, tente novamente mais tarde')
        }
    }
}