const Discord = require("discord.js")
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

  
    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`❌   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


let reklam = db.fetch(`reklamengel_${message.guild.id}`);
   const embed2 = new Discord.EmbedBuilder()
   .setColor("Red")
   .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
   .setDescription("<:x_:1030837053975437422> **Reklam Engel Sistemi Kapatıldı** \n Artık Bot Atılan Linkleri Sansürlemicek.")
if (reklam)  {

    db.delete(`reklamengel_${message.guild.id}`);
    message.channel.send({embeds: [embed2], allowedMentions: { repliedUser: false }})

    return
}



},
  
  exports.conf = {
   
    aliases: ["reklam-kapat"]
    
  }
  
exports.help = {
name: "reklamengel-kapat",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}