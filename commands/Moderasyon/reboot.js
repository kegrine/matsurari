const {MessageEmbed} = require("discord.js");
const ayarlar = require('./config.json')
exports.run = async (client, message, args, level) => {

  if(message.author.id !== "749299654809878529") return message.reply(`Bu komutu sadece Kegrine kullanabilir!`);

  let embed = new MessageEmbed()
  .setColor("BLACK")
  .setTitle("» Bot yeniden başlatılıyor...")
  await message.channel.send(embed); // send the embed

  
  console.log("Bot yeniden başlatılıyor...");


  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });


  process.exit(1);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reeboot", "reset", "yenile", "yeniden-başlat"],
  permLevel: 10,
 
};

exports.help = {
  name: "reboot",
  description: "Botu yeniden başlatır.",
  usage: "reboot",
 
};