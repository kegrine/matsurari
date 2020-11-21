const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {

request(`https://api.alexflipnote.dev/dogs`, function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var info = JSON.parse(body);
          let catembed = new Discord.MessageEmbed()
          .setColor("#7289DA")
          .setTitle("HAV :dog: ")
          .setImage(info.file);

  message.channel.send(catembed);
    }
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kopek', 'köpek', 'köpke'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
    name: 'kopek',
  description: 'Random kopek fotoğrafı atar.',
  usage: 'kopek'
};