const Discord = require('discord.js');

exports.run = (client, message, args) => {
let lithium = args[0]
let lithium2 = args[1]
if (!lithium || !lithium2) return message.channel.send(`Lütfen 2 kelime yazınız!`)
let lithium_topare = `https://api.alexflipnote.dev/didyoumean?top=${lithium}&bottom=${lithium2}`
message.channel.send(new Discord.MessageAttachment(lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["didumean",'umean','mean'],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'didyoumean',
  description: 'İstediğiniz yazıda drake memei çıkartır.',
  usage: 'didyoumean <yazı> <yazı>'
};