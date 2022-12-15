const Discord = require("discord.js");
const mapping = {
  0: "<:0_:1036219101103800351>", //sayılar
  1: "<:1_:1036219099409293333>",
  2: "<:2_:1036219097274404884>",
  3: "<:3_:1036219094577459210>",
  4: "<:4_:1036219515849158729>",
  5: "<:5_:1036219514486013982>",
  6: "<:6_:1036219510648229888>",
  7: "<:7:1036219509167624253>",
  8: "<:8_:1036219507636699168>",
  9: "<:9_:1036219506273558559>", //sayılar bitiş 
  ğ: "<:_:1036223722287271977>",//Alfabe
  ı: "<:__:1036226221140357220>",
  ö: "<:z_:1036227717793857618>",
  ş: "<:ssss:1036227045971198012>",
  ü: "<:U_:1036227387001671690>",
  ç: "<:ccc:1036228886536671278>",//alfabe bitiş
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:",
  "&": "<:ss:1036229576252215316>",
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach((c) => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});
exports.run = (client, message, args) => {
  if (args.length < 1) return message.reply("**Bir mesaj belirt**");

  if (args.length > 50)
    return message.channel.send(`:x: En fazla 50 Harf Kullanabilirsiniz.`);

  message.channel.send(
    args
      .join(" ")
      .split("")
      .map((c) => mapping[c] || c)
      .join("")
  );
};

exports.conf = {
  aliases: ["emojiyazısı", "emojiyaz", "emoji-yazı"],
};

exports.help = {
  name: "emojiyazı",
};
