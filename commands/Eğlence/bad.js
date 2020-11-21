const Discord = require('discord.js');

exports.run = (client, message, args) => {
let lithium_topare = `https://api.alexflipnote.dev/bad?image=${message.author.avatarURL()}`
message.channel.send(new Discord.MessageAttachment(lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["kötü"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'bad',
  description: 'İstediğiniz yazıda drake memei çıkartır.',
  usage: 'drake <yazı> <yazı>'
};