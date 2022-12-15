const Discord = require("discord.js")
const apii = require("useful-tools")
exports.run = async (client, message, args) => {
  
 
    const owner = message.guild.members.cache.get(message.guild.ownerId);
const embed = new Discord.EmbedBuilder()
    .setTitle(message.guild.name + " Sunucu Bilgileri")
    .setColor("#152238")
    .setDescription(`<:nokta:1028251816477085728> Sunucu Sahibi: <@${owner.user.id}>\n<:nokta:1028251816477085728> Kanal Sayıları: ${message.guild.channels.cache.filter(m => m.type === "text").size}\n<:nokta:1028251816477085728> Emoji Sayısı: ${message.guild.emojis.cache.size}\n<:nokta:1028251816477085728> Rol Sayısı: ${message.guild.roles.cache.size}\n<:nokta:1028251816477085728> Kuruluş: ${apii.tarih(message.guild.createdTimestamp)}`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
  message.channel.send({embeds: [embed]})
}

exports.conf = {
  aliases: ["sb"]
}

exports.help = {
  name: "sunucubilgi"
}