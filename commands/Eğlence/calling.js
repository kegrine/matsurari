const Discord = require('discord.js');

exports.run = (client, message, args) => {
let seymaphine = args[0]
if (!seymaphine) return message.channel.send(`Lütfen geçerli bir kelime yazınız!`)
let Lithium_topare = `https://api.alexflipnote.dev/calling?text=${seymaphine}`
message.channel.send(new Discord.MessageAttachment(Lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["call"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'arama',
  description: '',
  usage: ''
};