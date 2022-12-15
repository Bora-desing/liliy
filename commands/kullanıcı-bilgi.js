const { EmbedBuilder } = require('discord.js')
const moment = require('moment')
moment.locale('TR')

    exports.run = (client, message, args) => {

        const member = message.mentions.members.first() || message.member
        const status = {
            online: '<:aktif:1030837057108582490> `Çevrimiçi`',
            idle: '<:bota:1028252132484321350> `Boşta`',
            dnd: '<:rahatszetme:1028252134518575124> `Rahatsız Etmeyin`',
        }
const embed = new EmbedBuilder()
.setTitle("Liliy | Kullanıcı Bilgi")
.setDescription(`**Kullanıcı Adı:** ${member.user.username}\n**Kullanıcı ID:** \`${member.id}\`\n**Status:** ${status[member.presence.status]}\n**Hesap Oluşturulma Tarihi:** \`${moment.utc(member.user.createdAt).format('LLLL')}\`\n**Sunucuya Katılım Tarihi:** \`${moment.utc(member.joinedAt).format('LLLL')}\`\n**Rolleri:** ${member.roles.cache.map(role => role.toString())}`)
.setColor("#152238")
        
        message.channel.send({embeds: [embed]})
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["kb"],
        permLevel: 0
       };
       
       exports.help = {
          name: 'kullanıcı-bilgi',
        description: 'kullanıcı bilgi verir',
        usage: 'kb'
       };