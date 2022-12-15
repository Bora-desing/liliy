const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")
const qdb = require('croxydb')



client.on('ready', () => {
    client.user.setActivity(`+yardım | +sb`)
    console.log(`[✔️ Aktif onayı] ${client.user.tag} isimli bot başarıyla şu an aktifleştirildi!`);


client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`[🤖 Kaç komut] ${files.length}Toplam Komut`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`[✔️ Başarılı] ${props.help.name} Adlı komut `);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
