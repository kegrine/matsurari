const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    
    const webhook = new Discord.WebhookClient(
        "779278319836200961",
        "JKQNk6vm5ZBSKBzPXLX0zi1iisdrFqcTp4xcN6BkkHpdZjx79RVPL-20wd3nAlwgdvl0"
      );
      
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = webhook
let embed = new Discord.MessageEmbed()
.setTitle("Öneri/İstek")
.setThumbnail("http://files.kegri.wtf/oneri.png")
.addField("Öneri / İstek", bug)
.addField("Öneren", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Öneri Başarı İle İletildi.**")

webhook.send(embed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneriyap","oneri"],
  permLevel: 0  
};

exports.help = {
  name: 'öneri',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'hatabildir'
}