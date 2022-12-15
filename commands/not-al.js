const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
exports.run = async (client, message, args) => {
let not = args.slice(0).join(" ")
if (!not) return message.reply("<:x_:1030837053975437422> Lütfen bir not yaz!")
message.reply("<:tik:1030837055489585182> Notun Başarıyla Kayıt Edildi!")
debe.set(`not_${message.author.id}`, not)
}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "not-al"
}