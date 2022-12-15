const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
exports.run = async (client, message, args) => {

const row1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()

                .setLabel("Botu Davet Et")
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=1025858974937002076&permissions=0&scope=bot%20applications.commands`)
                .setEmoji("1009014663796772935")
                .setStyle(ButtonStyle.Link)
        )
        .addComponents(
            new ButtonBuilder()
                .setLabel("Destek Sunucum")
                .setURL(`https://discord.gg/GmVKUh3Mt9`)
                .setEmoji("1031144291654959144")
                .setStyle(ButtonStyle.Link)
        )

  const row = new ActionRowBuilder()

    .addComponents(
      new SelectMenuBuilder()
        .setCustomId('liliyAction')
        .setPlaceholder('Komutlar ve daha fazlası')
        .addOptions([
          {
            label: "Eğlence",
            description: "Ufak Eğlence Komutlarımı Gösterir",
            emoji: "1026108840053321818",
            value: "eğlence"

          },
          {
            label: "Moderasyon",
            description: "Sunucunu Çok Gelişmiş Moderasyon Komutlarımla Korurum",
            emoji: "1030837052385808464",
            value: "moderasyon"

          },
          {
            label: "Bot",
            description: "Bot'un Komutlarını Gösterir",
            emoji: "1028251823821295647",
            value: "bot"

          },
          {
            label: "Çekiliş",
            description: "Ufak Çekiliş Komutlarını Gösterir",
            emoji: "1020779663485833246",
            value: "cekilis"

          },
          // {
          //     label: "Başlık",
          //     description: "Açıklama",
          //     emoji: "Emoji",
          //     value: "isim"

          // },
          // {
          //     label: "Başlık",
          //     description: "Açıklama",
          //     emoji: "Emoji",
          //     value: "isim"

          // },
          // {
          //     label: "Başlık",
          //     description: "Açıklama",
          //     emoji: "Emoji",
          //     value: "isim"

          // },

        ]));


  const lourityYardim = new EmbedBuilder()
    .setTitle('Liliy Yardım Menüsü')
    .setDescription(":flag_gb: English \n> Hello, I'm lili bot moderation, raffle, fun.\n:flag_tr: Türkçe\n> Merhaba ben liliy bot moderasyon,çekiliş,eğlence gibi komutlarım bakmak istersen aşağıdaki komut seçeneklerinden bakabilirsin")
    .setThumbnail(client.user.displayAvatarURL())
  .setFooter({ text: `${message.author.username} | Tarafından istendi`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setColor("#152238")

  message.reply({ embeds: [lourityYardim], components: [row,row1] })

};
exports.conf = {
  aliases: ["help"]
};

exports.help = {
  name: "yardım"
};