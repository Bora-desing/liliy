const Discord = require("discord.js")
const db = require("croxydb")


module.exports.run = async (client, message, args) => {

  
    if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`❌   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


let reklam = db.fetch(`reklamengel_${message.guild.id}`);
   const embed = new Discord.EmbedBuilder()
   .setColor("Green")
   .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
   .setDescription("<:tik:1030837055489585182> **Reklam Engel Sistem Aktif Edildi** \n Artık Bot Atılan Linkleri Sansürlicek.")

if (!reklam)  {

    db.set(`reklamengel_${message.guild.id}`, true);
    message.channel.send({embeds: [embed], allowedMentions: { repliedUser: false }})

    return
}



},
  
  exports.conf = {
   
    aliases: ["reklam-aç"]
    
  }
  
exports.help = {
name: "reklamengel-aç",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}