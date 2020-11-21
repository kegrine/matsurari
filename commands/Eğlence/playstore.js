const Discord = require("discord.js");
const config = require('./config.json')
const gplay = require('google-play-scraper')
exports.run = function(client, message, args) {
  var prefix = config.prefix
 
  const  uyg = args.join(' ')
 
        if (!uyg) return message.channel.send("Geçerli bir uygulama ismi girmeli")
        if (uyg) {
         
                gplay.search({
                lang: 'tr',
                term: uyg,
                country: 'tr',
                fullDetail: true
                 
           
                 
            }).then((x) => {      
                const game = x[0]
               
                var bymayfe = game.editorsChoice
               
                if(bymayfe === true) {
                bymayfe = "Editörün Seçimi"
                } else {
                  bymayfe = "Değil"                  
                }
               
                const gameEmbed = new Discord.MessageEmbed()
                    .setTitle(game.title)
                    .setDescription(game.summary + `\n\n[Ziyaret İçin Tıkla](${game.url})`)
                    .addField("Puan: ", game.scoreText, true)
                    .addField("Fiyat: ", game.priceText, true)
                    .addField("İndirilme: ", game.installs, true)
                    .addField("Geliştirici: ", game.developer, true)
                    .addField("Boyut: ", game.size, true)
                    .addField("Editörün Seçimi mi ?: ", bymayfe, true)
                    .setThumbnail(game.icon)
                    .setTimestamp(Date())
                    .setColor(0x008000)
                return message.channel.send(gameEmbed)
            })
        }
}
       
 
 
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["play-store","store"],
  permLevel: 0
};
 
exports.help = {
  name: "playstore",
  description: "Google Play'den Arama Yapar",
  usage: "byg!playstore (GuardMayFe yi Eklemeyi Unutmayın Sizin İçin Yazdık O kadar be)"
};