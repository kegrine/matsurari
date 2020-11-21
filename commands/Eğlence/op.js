const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 
const kisi = message.mentions.users.first()
if (!kisi) {
  return message.reply("**Kimi öpeceğini yazmalısın. (*öp @kişi)**")
}
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${kisi} ${message.author.username} Seni öptü.**`)
 .setColor("RANDOM")
 .setImage("https://media1.tenor.com/images/6ffe0c54636bdc52945b3636b07f65c8/tenor.gif")
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
  name: 'öp',
  description: 'İstediğiniz kişiyi öpersiniz.', 
  usage: 'öp'
};