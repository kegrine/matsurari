const { NekoBot } = require("nekobot-api");
const Discord = require("discord.js")
const api = new NekoBot();

exports.run = async(client, message) => {
	
	
	(async () => {
    const image = await api.get("coffee");
	return message.channel.send(image)
})();
	
	
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kahve"],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'coffee',
  description: 'Kahve resimleri atar.',
  usage: 'kahve'
};