const Discord = require("discord.js");
const validateMessage = require("./formatAPI")


module.exports = function magiasMessage(detailObj){
    validateMessage(detailObj);
    const magiaMessage = new Discord.MessageEmbed()
        .setTitle(`${detailObj.name}`)
        .setDescription(`${detailObj.level} ${detailObj.school.name}`)
        .addFields(
            {name: "Details", value:`Casting time: ${detailObj.casting_time} \nRange : ${detailObj.range} \nComponents: ${detailObj.components} ${detailObj.material}\nDuration: ${detailObj.duration} \nClasses: ${detailObj.classes}`},

            {name: "Description", value:`${detailObj.desc.join("\n")} \n${detailObj.higher_level}`}
        )

    return magiaMessage;
}