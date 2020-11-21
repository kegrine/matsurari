const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../config.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  var oyun = [
    "💢 Destek sunucumuzda yardım alabilirsiniz!",
    "🤍 +75.000 kullanıcı!",
    "❤️ +50 sunucu!",
    "♨️ Web Panel yakında!",
    "🎵 Müzik komutları aktif!",
    "🌀 Destek sunucumuza göz at!",
    "☢️ hatabildir aktif!",
    "⚜️ Destek sunucusunda öneri yapın!",
    "🇬🇧 English support very soon!",
    "🇪🇸 Spanish support very soon!",
    "💣 lithium.kegri.wtf"
  ];
//PLAYING Oynuyor //WATCHING İzliyor
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], {type: 'WATCHING'});
  }, 2 * 2500);
};