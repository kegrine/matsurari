const { NekoBot } = require("nekobot-api");
const Discord = require("discord.js")
const api = new NekoBot();

exports.run = async(client, message) => {
	
	
	(async () => {
    const image = await api.get("holo");
	return message.channel.send(image)
})();
	
	
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: 'holo',
  description: 'Yemek resimleri atar.',
  usage: 'food'
};