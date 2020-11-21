const Discord = require('discord.js');

exports.run = (client, message, args) => {
let fistikcatto = args[0]
if (!fistikcatto) return message.channel.send(`Lütfen geçerli bir kelime yazınız!`)
let Lithium_topare = `https://api.alexflipnote.dev/scroll?text=${fistikcatto}`
message.channel.send(new Discord.MessageAttachment(Lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["kaydir"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'scroll',
  description: '',
  usage: ''
};