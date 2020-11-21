const Discord = require('discord.js');

exports.run = (client, message, args) => {
let queendoggy = args[0]
if (!queendoggy) return message.channel.send(`Lütfen geçerli bir kelime yazınız!`)
let Lithium_topare = `https://api.alexflipnote.dev/facts?text=${queendoggy}`
message.channel.send(new Discord.MessageAttachment(Lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["konular"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'facts',
  description: '',
  usage: ''
};