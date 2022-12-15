const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
    let guild = config.sunucuid
    let destekçi = config.destekçi
    if(message.guild.id!== guild) return message.reply(`<:x_:1030837053975437422> Bu komutu destek sunucusunda kullanmalısın!`)
  
  message.reply("Başarıyla destekçi rolün verildi!")
  message.guild.members.cache.get(message.author.id).roles.add(destekçi)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "oyverdim"
};
