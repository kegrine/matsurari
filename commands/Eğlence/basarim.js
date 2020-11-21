const snekfetch = require('snekfetch');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply(new Discord.MessageEmbed().setColor("RANDOM").setTitle('Yazmam için herhangi bir şey yazmalısın.'));
  
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Basarim Acildi!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit("En Fazla **22** Harf Yazabilirsin").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: "eğlence",
  aliases: ["mc"]
};

exports.help = {
  name: 'mcb',
  description: 'Minecraft başarımlarınızı atar.',
  usage: 'mcb'
};