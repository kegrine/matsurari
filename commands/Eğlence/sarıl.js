const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 
const kisi = message.mentions.users.first()
if (!kisi) {
  return message.reply("**Kime sarılacağını yazmalısın. (*sarıl @kişi)**")
}
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${kisi} ${message.author.username} Sana sarıldı.**`)
 .setColor("RANDOM")
 .setImage("https://media1.tenor.com/images/354729760b3f92216fdac44074454754/tenor.gif")
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
  name: 'sarıl',
  description: 'Kişiye sarılırsınız.', 
  usage: 'sayac-hg-msg'
};