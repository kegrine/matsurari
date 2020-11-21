const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('Türkçe karakter kullanmayınız.')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=changemymind&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor("fad0dd")
            .setAuthor("Lithium.")
            .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 100);
        });
    } catch(err) {
        console.log(err)    
    }
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cmm"],
  permLevel: 0
};
 
module.exports.help = {
  name: 'cmm',
  category: 'Kullanıcı',
  description: 'Change My Mind ',
  usage: 'cmm <yazı>'
};