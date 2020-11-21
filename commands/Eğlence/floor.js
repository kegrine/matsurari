const Discord = require('discord.js');

exports.run = (client, message, args) => {
let kegrine = args[0]
if (!kegrine) return message.channel.send(`Lütfen geçerli bir kelime yazınız!`)
let lithium_topare = `https://api.alexflipnote.dev/floor?image=${message.author.avatarURL()}&text=${kegrine}`
message.channel.send(new Discord.MessageAttachment(lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["zemin"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'floor',
  description: 'İstediğiniz yazıda floor memei çıkartır.',
  usage: 'floor <yazı> <yazı>'
};