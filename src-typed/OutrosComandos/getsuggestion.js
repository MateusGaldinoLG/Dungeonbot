const fs = require('fs');

module.exports = function sugestoes(msg, tokens){
    console.log('Sugestão adicionada');
    //console.log(tokens)
    let sugestao = tokens.join(' ')
    //console.log(sugestao)
    if(tokens.length !== 0){
        fs.appendFile('./OutrosComandos/suggestions.txt',`\n sugestão: ${sugestao}`, (err) =>{
            if(err){
                console.log(err)
                msg.reply('Ocorreu um erro em §sugestôes, tente novamente.')
            }
            else{
                msg.reply('Sugestão adicionada com sucesso.')
            }
        })
    }
    else{
        msg.reply('Sua sugestão deu erro, ela está vazia. Tente novamente.')
    }
}
