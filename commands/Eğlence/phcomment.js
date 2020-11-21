const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {

        let url = `https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.avatarURL()}&text=${args.join(" ")}&username=${message.author.username}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor("fad0dd")
            .setAuthor("")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 100);
        });
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
module.exports.help = {
  name: 'ph',
  category: 'Kullanıcı',
  description: 'Change My Mind ',
  usage: 'cmm <yazı>'
};