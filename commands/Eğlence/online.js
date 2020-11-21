const Discord = require('discord.js');
exports.run = (client, message, args) => {

let onlines = args[0]
if(!onlines) return message.channel.send(`Sunucu ID Belirtmen Gerek`)
const phylake = new Discord.MessageEmbed()
    .setAuthor("Sunucu Online")
    .setImage(`https://discordapp.com/api/guilds/${onlines}/embed.png`)
message.channel.send(phylake)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [], 
    permLevel: 0,
};

exports.help = {
    name: 'online',
    usage: 'Online sayaç.',
    description: 'Online sayaç.',
};