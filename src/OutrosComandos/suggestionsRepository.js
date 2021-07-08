const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

//get all information from the .env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

var botSuggestions = sequelize.define('botsuggestions',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        field: 'createdat',
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type: Sequelize.DATE
    }
});

module.exports = class SuggestionsRepository{

    constructor(){}

    async addSuggestion(suggestion){
        //false = open; true = closed
        const sugestao = await botSuggestions.create({body: suggestion, status: false})
        console.log("Created suggestion: "+sugestao);
    }

    async updateSuggestion(idToChange){

        await botSuggestions.update({status: true}, {
            where: {
                id: idToChange
            }
        })
        
    }

    async deleteAllClosedSuggestions(){
        await botSuggestions.destroy({
            where: {
                status = true
            }
        })
    }

    async findAllSuggestions(){
        const sugestoes = await botSuggestions.findAll();
        let suggestions = [];
        sugestoes.forEach(sugestao => {
            suggestions.push(`${sugestao.id}: ${sugestao.body}`);
        });
        return JSON.stringify(suggestions);
    }

    async findAllOpenSuggestions(){
        const sugestoesAbertas = await botSuggestions.findAll({
            where: {
                status: false
            }
        })
        let sugestoesAbertasArray = [];
        sugestoesAbertas.forEach(sugestao => {
            sugestoesAbertasArray.push(`${sugestao.id}: ${sugestao.body}`);
        });
        return JSON.stringify(sugestoesAbertasArray);

    }
}
