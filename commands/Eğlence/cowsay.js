const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
  var cowsay = require("cowsay");
  
  var mesaj = args.join(' ')
  
  if(!mesaj) return message.channel.send('Cowsay için geçerli bir metin gir.')

message.channel.send('```' + cowsay.say({
	text: mesaj,
  cow: '', //Codare
  eyes: 'oo', //Codare
  tongue: ';', //Codare
}) + '```');
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ii'],
  permLevel: 0
};

exports.help = {
  name: "cowsay",
  description: "Bot i",
  usage: "istatistik"
};
   