const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
    let not = debe.fetch(`not_${message.author.id}`)
    if (!not) return message.reply("hiç notun yok!")
const embed = new EmbedBuilder()
.setTitle("İşte notunuz")
.setDescription(not)
.setColor("#152238")
message.reply({embeds: [embed]})

}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "notum"
}