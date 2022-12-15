const {EmbedBuilder} = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
exports.run = async (client, message, args) => {
  const Uptime = moment
  .duration(client.uptime)
  .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .addFields({ name: '<:developer:1040689898484670544> Nostge Şirketi Tarafından yapılmıştır\n<:Sponsor:1041283208156819506> Vds Sponsor by xxx', value: `• Bot verileri anlık olarak güncelleme gösterebilir ve tüm kullanıcı gerektiren veriler kullanıcı kimliğini açığa çıkarmaz.`, inline: false})
    .addFields({ name: '• Sistem verileri', value: `\n-Botun pingi: \`${client.ws.ping}Ms\`\n-Bellek Kullanımı: \`${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB\`\n-Uptime Süresi: \`${Uptime}\``, inline: true})
    .addFields({ name: '• Bot verileri', value: `\n-Komut sayısı: \`51\`\n-Kullanan kullanıcı: \`${client.users.cache.size}\`\n-Kaç sunucuda: \`${client.guilds.cache.size}\`\n-Botun kuruluşu: \`eki 01,2022\``, inline: false})
    .addFields({ name: '• İşlemci verileri', value: `\n-İşletim sistemi: \`Windows 64 Bit\`\n-İşlemci:\`${os.cpus().map(i => `${i.model}`)[0]}\`\n-Discord.js sürümü: \`14.2.0\`\n-Node.js sürümü: \`v16.14.2\` `, inline: false})
    .setFooter({ text: `${message.author.username} | Tarafından istendi`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: ["i"]
};

exports.help = {
  name: "istatistik"
};
