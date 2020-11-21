const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 
 const embed = new Discord.MessageEmbed()
 .setImage("https://media.discordapp.net/attachments/779277292827574282/779310949458903060/hardmath.gif")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["cf"],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'confused',
  description: 'Kişiye sarılırsınız.', 
  usage: 'sayac-hg-msg'
};