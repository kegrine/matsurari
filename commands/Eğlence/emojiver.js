const emran = require("discord.js");
const snek = require("snekfetch");
const twemoji = require("twemoji");
const fs = require("fs");

exports.run = async (client, message, args) => {
  if (!args[0]) {
    return message.channel.send("Lütfen emoji ismi giriniz!");
  }
  try {
    const codare = emran.Util.parseEmoji(args[0]);

    if (codare.animated === true) {

      const URL = `https://cdn.discordapp.com/emojis/${codare.id}.gif?v=1`;
      const { body: buffer } = await snek.get(`${URL}`);
      const send = fs.writeFileSync("codare.gif", buffer);
      message.channel.send({ files: "codare.gif" });

    } else if (codare.id === null) {

      const twemote = twemoji.parse(args[0]);
      const regex = /src="(.+)"/g;
      const regTwemote = regex.exec(twemote)[1];
      const { body: buffer } = await snek.get(`${regTwemote}`);
      const send = fs.writeFileSync("codare.png", buffer);
      await message.channel.send({ files: "codare.png" });

    } else {

      const URL = `https://cdn.discordapp.com/emojis/${codare.id}.png`;
      const { body: buffer } = await snek.get(`${URL}`);
      const send = fs.writeFileSync("codare.png", buffer);
      message.channel.send({ files: "codare.png" });
    }
  } catch (error) {
    if (error.message === "Hata") {
      message.reply("Bu isimde emoji bulunamadı!");
    }
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0,
}; 

exports.help = {
  name: "jumbo",
  description: "İstediginiz Emojinin Büyük Modelini Gösterir.",
  usage: "jumbo <emoji>"
};