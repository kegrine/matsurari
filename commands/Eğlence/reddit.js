const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');


exports.run = async (client, message, args) => {
let sub = args[0]
if(!sub) return message.reply("Geçerli bir subreddit belirtin.")
 const body = await fetch(`https://www.reddit.com/r/${sub}.json?sort=hot&t=day`)
       .then(response => response.json());
if(body.error)
            {
            message.channel.send(`${sub} isminde bir subreddit yok veya hata oluştu.`)
          } else {
        const izin = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!izin.length) return message.channel.send('Post nsfw içerikli olduğu için buraya atılamaz.');
        const random = Math.floor(Math.random() * izin.length)
       const embed = new Discord.MessageEmbed()
        .setColor("#FF4300")
       .setDescription(`[${izin[random].data.title}](https://www.reddit.com${izin[random].data.permalink})`)
        .setImage(izin[random].data.url)
         .addField("Eğer resim görünmüyorsa", `[Bana tıkla](${izin[random].data.url})`)
        .setFooter(`⬆️` + izin[random].data.ups + ` 💬` + izin[random].data.num_comments + ` r/${sub}`+ ` u/` + izin[random].data.author)
        message.channel.send(embed)
          }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reddit"],
  kategori: "eğlence",
  permLevel: 0
};

module.exports.help = {
  name: "reddit",
  description: "reddit",
  usage: "reddit"
};