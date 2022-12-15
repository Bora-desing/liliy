const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
   const user = message.mentions.users.first()
   if(!user) return message.channel.send("**Kimi hackleyeceğini belirt**")
  
   const embed = new EmbedBuilder()
   .setColor("#152238")
   .setDescription("<@"+user.id+"> Hacklendi! çok kolaydı ez :sunglasses:")
   .setImage("https://media.giphy.com/media/lp3GUtG2waC88/giphy.gif")
   .setFooter({ text: `XXX#1234 | Tarafından istendi`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
   
   message.channel.send("**<@"+user.id+"> Hackleniyor... 🧑‍💻**").then(msg => {
       setTimeout(() => {
         
         msg.delete()
         message.channel.send({embeds: [embed]})  
         
       }, 3000)
   });
  
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "hackle"
};
