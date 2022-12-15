const Discord = require("discord.js");
const db = require("croxydb")

module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
   const embed = new Discord.EmbedBuilder()
   .setColor("Red")
   .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
   .setDescription("<:x_:1030837053975437422> **Sistem Kapatıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlemicek.")

let küfür = db.fetch(`kufurengel_${message.guild.id}`);

if (küfür)  {

    db.delete(`kufurengel_${message.guild.id}`);
    message.reply({embeds: [embed], allowedMentions: { repliedUser: false }})

    return
}


},
  
  exports.conf = {
   
    aliases: ["küfür-kapat"]
    
  }
  
exports.help = {
name: "küfürengel-kapat",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}