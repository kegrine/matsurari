const { NekoBot } = require("nekobot-api");
const Discord = require("discord.js")
const api = new NekoBot();

exports.run = (client, message, args) => {
	
 if(message.channel.nsfw || message.channel.type === 'dm'){
   (async () => {
    const image = await api.get("thigh");
	return message.channel.send(image)
})();
}
 else{
       message.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: ('Bu kanal NSFW (Not Safe For Work) kanalı değil!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['th'],
   permLevel: 0
 };

 exports.help = {
   name: 'thigh',
   description: 'Anal resmi atar.',
   usage: 'hd'
 };
