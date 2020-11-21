const Discord = require('discord.js');

exports.run = (client, message, args) => {
let devtr = args[0]
let xfalcon = args[1]
if (!devtr || !xfalcon) return message.channel.send(`Lütfen 2 kelime yazınız!`)
let DevTR_topare = `https://api.alexflipnote.dev/pornhub?text=${devtr}&text2=${xfalcon}`
message.channel.send(new Discord.MessageAttachment(DevTR_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["hub"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'pornhub-yazı',
  description: 'PHub yazı tipinde bir yazı atar.',
  usage: 'hub <yazı> <yazı>'
};