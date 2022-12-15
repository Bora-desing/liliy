const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
    
   
const embed = new EmbedBuilder()
.setColor("#152238")
.setDescription(`**Liliy bot |   Ping'im**\n<:nokta:1028251816477085728> ${client.ws.ping}Ms`)
.setFooter({ text: `${message.author.username} | Tarafından istendi`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })

message.channel.send({embeds: [embed]})

}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "ping"
}