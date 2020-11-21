const Discord = require('discord.js');
const Jimp = require('jimp');
 
exports.run = (client, message, params) => {
 
  if(params[0]) if(params[0] === 'sunucu-ikon'){
    if(!message.guild) return message.channel.send('Bu sadece sunucularda kullanılabilir.');
    if(!message.guild.iconURL) return message.channel.send('Bu sunucunun ikonu yok.');
 
    Jimp.read(message.guild.iconURL(), function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
        image.pixelate(10).write('./images/pixel/imageGuild.png');
        setTimeout(() => {
          message.channel.send('./images/pixel/imageGuild.png');
        }, 500);
    });
    return;
  }
  if(message.mentions.users.first()) {
      Jimp.read(message.mentions.users.first().avatarURL({format: "png"}), function (err, image){
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.pixelate(10).write('./images/pixel/imageMent.png');
          setTimeout(() => {
        message.channel.send(' ', {files: ["./images/pixel/imageMent.png"]});
          }, 500);
      });
  } else{
    Jimp.read(message.author.avatarURL({format: "png"}), function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen Yapımcıya Bildirin.');
        image.pixelate(10).write('./images/imageAuthor.png');
        message.channel.send(' ', {files: ["./images/pixel/imageAuthor.png"]});
    });
  }
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};
//devtr
exports.help = {
  name: 'pixel',
  description: 'Avatarın renklerini ters çevirir.',
  usage: 'invert [@<kişi ismi>]'
};