const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 
const kisi = message.mentions.users.first()
if (!kisi) {
  return message.reply("**Kiminle dans edeceğini yazmalısın. (*dans @kişi)**")
}
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${kisi} ${message.author.username} Seninle dans etti.**`)
 .setColor("RANDOM")
 .setImage("https://media1.tenor.com/images/fb61db61c604d850ff378dd3f376b34e/tenor.gif")
 .setTimestamp()
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'dans',
  description: 'İstediğiniz kişiyle dans edersiniz.', 
  usage: 'dans'
};