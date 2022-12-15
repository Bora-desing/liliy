const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const site = config.website
    const gizlilik = config.politika
    const instagram = config.instagram
  const embed = new EmbedBuilder()
.setTitle("<:link:1030943953362636832> Nostge & Liliy Bağlantı <:link:1030943953362636832>")
.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
.setDescription(`<:nokta:1028251816477085728> [İnstagram](https://www.instagram.com/nostge_tr/)\n<:nokta:1028251816477085728> [Nostge Web Sayfası](xxx.tk)\n<:nokta:1028251816477085728> [Botu Sunucuna Ekle](${davet})\n<:nokta:1028251816477085728> [Destek Sunucum](${destek})\n<:nokta:1028251816477085728> [Liliy Web Sayfası](${site})\n<:nokta:1028251816477085728> [Bota Oy Ver](${topgg})`)
.setColor("#152238")
.setFooter({ text: `${message.author.username} | Tarafından istendi`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "linkler"
};
