const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    
    const webhook = new Discord.WebhookClient(
        "773590383837839371",
        "Wx2TddBvg4WsY7olVGHPRKbiBcevKUJp83NyO27Nik9bkkXpDju8pb35I3GiNLR6TMKw"
      );
      
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = webhook
let embed = new Discord.MessageEmbed()
.setTitle("Bug Report")
.setThumbnail("http://files.kegri.wtf/hatabildir.png")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")

webhook.send(embed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'hatabildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'hatabildir'
}