const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {

request(`https://api.alexflipnote.dev/sadcat`, function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var info = JSON.parse(body);
          let catembed = new Discord.MessageEmbed()
          .setColor("#7289DA")
          .setTitle("bugün Lithium üzgün.")
          .setImage(info.file);

  message.channel.send(catembed);
    }
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uzgun','sad','sadcat'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
    name: 'sad',
  description: 'Random kopek fotoğrafı atar.',
  usage: 'kopek'
};