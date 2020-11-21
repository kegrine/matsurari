const Discord = require('discord.js');

exports.run = (client, message, args) => {
let marilyncat = args[0]
if (!marilyncat) return message.channel.send(`Lütfen geçerli bir kelime yazınız!`)
let Lithium_topare = `https://api.alexflipnote.dev/challenge?text=${marilyncat}`
message.channel.send(new Discord.MessageAttachment(Lithium_topare,"img.png"));
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["meydanokuma"],
  kategori: "eğlence",
  permLevel: 0
};
exports.help = {
  name: 'challenge',
  description: '',
  usage: ''
};