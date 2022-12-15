const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

  let yt = ["**Yazı**","**Tura**","**Dik**"]
let sonuç = yt[Math.floor(Math.random() *yt.length)];

    const embed = new EmbedBuilder()
    .setDescription(`Para ${sonuç} Geldi`)
    .setColor("#0082ff")
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["yt"]
};

exports.help = {
  name: "yazı-tura"
};