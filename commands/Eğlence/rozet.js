const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!args[0]) {
const emmbed = new Discord.MessageEmbed()
emmbed.setTitle('Discord Rozetleriniz:')
    .setColor('#94414c')
  emmbed.setDescription(message.author.flags.toArray().join('\n') ? message.author.flags.toArray().join('\n')
.replace("HOUSE_BRAVERY", "HypeSquad Bravery")  
.replace("HOUSE_BRILLIANCE", "HypeSquad Brilliance")
.replace("HOUSE_BALANCE", "HypeSquad Balance")
.replace("VERIFIED_DEVELOPER", "Doğrulanmış Geliştirici")
.replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
.replace("DISCORD_PARTNER", "Partner")
.replace("HYPESQUAD_EVENTS", "Events Rozeti")
.replace("BUGHUNTER_LEVEL_1", "Hata Avcısı Seviye I")
.replace("EARLY_SUPPORTER", "Erken Dönem Destekçisi")
.replace("TEAM_USER", "Takım Üyesi")
.replace("SYSTEM", "Sistem")
.replace("BUGHUNTER_LEVEL_2", "Hata Avcısı Seviye II")
.replace("VERIFIED_BOT", "Onaylı Bot") : `yok`)        
     message.channel.send(emmbed)
}
if(kişi){ 
const emmbed = new Discord.MessageEmbed()
emmbed.setTitle('Discord Rozetleriniz:')
    .setColor('#94414c')
  emmbed.setDescription(kişi.flags.toArray().join('\n') ? kişi.flags.toArray().join('\n')//Made by Furtsy#0827
.replace("HOUSE_BRAVERY", "HypeSquad Bravery")  
.replace("HOUSE_BRILLIANCE", "HypeSquad Brilliance")
.replace("HOUSE_BALANCE", "HypeSquad Balance")
.replace("VERIFIED_DEVELOPER", "Doğrulanmış Geliştirici")
.replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
.replace("DISCORD_PARTNER", "Partner")
.replace("HYPESQUAD_EVENTS", "Events Rozeti")
.replace("BUGHUNTER_LEVEL_1", "Hata Avcısı Seviye I")
.replace("EARLY_SUPPORTER", "Erken Dönem Destekçisi")
.replace("TEAM_USER", "Takım Üyesi")
.replace("SYSTEM", "Sistem")
.replace("BUGHUNTER_LEVEL_2", "Hata Avcısı Seviye II")
.replace("VERIFIED_BOT", "Onaylı Bot") : `yok`)        
     message.channel.send(emmbed)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozet", "bayrak","badge"],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "bayrak",
  description: "!rozet <kişi> veya !bayrak",
  usage: "bayrak"
};