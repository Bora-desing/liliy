const Discord = require("discord.js");
const db = require("croxydb")

module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
   const embed2 = new Discord.EmbedBuilder()
   .setColor("Green")
   .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
   .setDescription("<:tik:1030837055489585182> **Sistem Açıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürliycek.")

let küfür = db.fetch(`kufurengel_${message.guild.id}`);


if (!küfür)  {

    db.set(`kufurengel_${message.guild.id}`, true);
    message.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
    return
}
},
  
  exports.conf = {
   
    aliases: ["küfür-aç"]
    
  }
  
exports.help = {
name: "küfürengel-aç",
description: "Reklam Engel Sistemini Açarsın/Kapatırsın.",
kategori: "mod",
usage: "",
}