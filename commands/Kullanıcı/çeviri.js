const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let google = args.slice(0).join("+");

    let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
    if (!link) return message.reply("Hata !");
    if (!google) return message.reply("**Lütfen ne çevireceğimi yaz.**");
    let embed = new Discord.MessageEmbed()

      .setColor("0xe2ff00")
      .setTimestamp()

      .addField("Kelime / Cümle:", `${args.slice(0).join(" ")}`)
      .addField("Çevrilen link:", `${link}`)
      .setFooter("Lithium | Google Çeviri Sistemi");

    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["translate"],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: "çeviri",
  description: "İstediğiniz yazıyı çevirir.",
  usage: "çeviri <yazı>"
};