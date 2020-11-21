const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM') 
    .setTitle(':game_die: Attığın Zarın Sonucu: ' + zar()));
    
    function zar() {
        var rand = ['1', '2', '3', '4', '5', '6', '10', '23', '30', '38', '43', '49', '56','70','77','86','92'];
        return rand[Math.floor(Math.random()*rand.length)];
    }
} //westron
exports.conf = {
  enabled: false,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};
exports.help = {
  name: 'zarat'
};
//westron