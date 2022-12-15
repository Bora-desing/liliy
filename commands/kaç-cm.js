const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")

exports.run = async (client, message, args) => {

  const user = message.mentions.users.first()
  
  const tahmin = Math.floor(Math.random() * 48) 
  var kalp;
  var yorum; 
  
  if(tahmin <= 5) {
    kalp = `<:malataforan:1035959607614513212>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>`
    yorum = ":face_with_monocle: Çok minik göremiyorum"
  }
  
  if(tahmin >= 10) {
    kalp = `<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>`
    yorum = "Azıcıkta olsada yani"
  }
  
  if(tahmin >= 20) {
    kalp = `<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>`
    yorum = "Eh biraz biraz bir şeyler var gibi."
  }
  
  if(tahmin >= 30) {
     kalp = `\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:yok:1035959609325785109>\n<:yok:1035959609325785109>`
     yorum = "Biraz daha uğraşırsan bu iş olacak gibi :)"
  }

  if(tahmin >= 40) {
    kalp = `<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:yok:1035959609325785109>`
    yorum = "Oluyor gibi :))"
  }
  
  if(tahmin === 48) {
    kalp = `<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>\n<:malataforan:1035959607614513212>`
    yorum = ":open_mouth: Çok büyük"
  }
  
  message.channel.send({ embeds: [
    new EmbedBuilder()
    .setColor("#EBC8B2")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`**Malataf oran** **${tahmin}** Cm\n${kalp}\n\n${yorum}`)
    .setFooter({ text: `${message.author.username} | Tarafından istendi`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
  ]})
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kaç-cm"
};