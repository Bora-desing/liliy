const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("Üyeleri Banla Yetkiniz Yok.")


        let user = message.mentions.users.first();




        if(!user) return message.channel.send("Lütfen Banlanacak Kişiyi Belirtiniz.")




const üye = message.guild.members.cache.get(user.id)


üye.ban()








message.channel.send(`<@${user.id}>, Başarılı bi şekilde yasaklandı! <:ucak:1030941453075095675>`)




}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban"
};