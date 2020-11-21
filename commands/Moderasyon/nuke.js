const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
  message.channel.send('Lithium bu kanalı bombaladı. https://media1.tenor.com/images/7c7195f5e6119519a1e22b5207ebf412/tenor.gif?itemid=13918708')
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
    name: 'nuke',
  description: 'Better antispamdaki nuke komutu işte',
  usage: 'nuke'
};