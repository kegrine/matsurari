const Discord = require('discord.js');

exports.run = (client, message, args) => {
let Lithium_topare = `https://api.alexflipnote.dev/fiter/gay?<image:${message.author.avatarURL()}>`
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
  name: 'gay',
  description: '',
  usage: ''
};