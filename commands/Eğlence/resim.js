const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let kong = args.slice(0).join(" ");
if(!kong) return message.channel.send("Kelime gir")
var gis = require('g-i-s');
gis(kong, logResults);
function logResults(error, results) {
  if (error) {
    console.log(error);
  }
  else {
const embed = new Discord.MessageEmbed
message.channel.send('**Arama Sonucu:**', { files: [results[1].url]})
  }
}

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["resim"],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "resim",
  description: "Google'den resim arar.",
  usage: "resim"
};