const Discord = require("discord.js");
const db = require('croxydb');
let csl = "1040659833218674768"

exports.run = async(client, message, args) => {
let data = db.get(`tavsiye_${message.author.id}_${message.guild.id}`)
if(data){
if(Date.now() > data+86400000){
await db.delete(`tavsiye_${message.author.id}_${message.guild.id}`)
} else {
return message.channel.send("<:slnd:1028252134518575124> Tavsiye komutu **24 saat** içinde **1 kez** kullanılabilir. \n<:nokta:1028251816477085728> Son kullanılan zaman: <t:"+Math.floor(data/1000)+":R>")
}
}

let type = args.slice(0).join(" ");
if (type.length < 1) return message.channel.send("Lütfen önerinizi yazın. Örnek kullanım: `+öneri Bence Özel Gif Menü Kalkmalı`")

const embed2 = new Discord.EmbedBuilder()
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
.setColor(Discord.Colors.Blue)
.setTitle("Liliy | Tavsiyeler")
.addFields([
{ name: `Kullanıcı ID`, value: message.author.id, inline:true },
{ name: `Kullanıcı Adı`, value: message.author.username, inline:true },
{ name: `Kullanıcı Tagı`, value: message.author.discriminator, inline:true },
{ name: `Sunucu`, value: message.guild.name, inline:true },
{ name: "Öneri", value: type }
])
.setTimestamp()
await client.channels.cache.get(csl).send({embeds:[embed2]}).catch(e => {})

await db.set(`tavsiye_${message.author.id}_${message.guild.id}`, Date.now())
return message.reply("Tavsiyeniz İçin Teşekkürler\n<:gg_icon:1031144291654959144>Discord Sunucumuza gelerek tavsiyeni görebilirsin")
};

exports.conf = {
aliases: []
};

exports.help = {
name: "tavsiye"
};