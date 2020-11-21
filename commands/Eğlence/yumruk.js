const Discord = require('discord.js');
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

const kisi = message.mentions.users.first()
if (!kisi) {
  return message.reply("**Kime yumruk atacağını yazmalısın. (*tokat @kişi)**")
}
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${kisi} ${message.author.username} Seni yumrukladı.**`)
 .setColor("RANDOM")
 .setImage("https://thumbs.gfycat.com/VariableColossalEquine-max-1mb.gif")
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
  name: 'yumruk',
  description: 'İstediğiniz kişiyi yumruklarsınız.', 
  usage: 'yumruk'
};