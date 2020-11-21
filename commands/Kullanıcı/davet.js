const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 const embed = new Discord.MessageEmbed()
 .setDescription(`**Lithium'u davet edin!**`)
 .setColor("RANDOM")
 .addField("Lithium Davet Linki:", "[Davet] (https://discordapp.com/oauth2/authorize?client_id=763712626190188554&scope=bot&permissions=66187078)")
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
  name: 'davet',
  description: 'Kişiye sarılırsınız.', 
  usage: 'sayac-hg-msg'
};