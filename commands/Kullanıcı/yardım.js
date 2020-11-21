const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
 
  let pages = [
              '**Bot Hakkında Bilgiler**\n\n **`*`yardım - Yazarak komutları görebilirsiniz.** \n  **`*`davet - Yazarak sunucunuza davet edebilirsiniz.** \n  __**`*`hatabildir ile botun hatalarını artık bildirebilirsiniz!**__',
              '**Kullanıcı ve Eğlence**\n\n  **`*`balık - Balık tutarsınız.** \n **`*`mcb (yazı) - Bir minecraft başarımı yaparsınız. ** \n **`*`yumruk (@kişi) - Birisini yumruklarsınız.** \n  **`*`sarıl - Birisine sarılırsınız. **\n **`*`coffee - Kahve resimleri alırsınız.** \n **`*`danset - Birisiyle dans edersiniz.** \n **`*`holo - Anime çizimleri gönderir.** \n **`*`mean = Google "bunu mu demek istemiştiniz?" memeini oluşturur.** \n **`*`drake - Drake memeini oluşturur. ** \n **`*`sad - Üzgün kedi resimleri gönderir.** \n **`*`food - Rastgele yemek resimleri atar. ** \n **`*`renk = Avatarınızın renklerini tersine çevirir.** \n **`*`hub (yazı 1 - 2) - PHub yazı stiliyle bir fotoğraf atar.** \n **`*`kedi - Rastgele kedi resimleri atar.** \n **`*`köpke - Rastgele KÖMPKE resimleri atar.** \n **`*`kuş - Rastgele kuş resimleri atar.** \n **`*`meme - Rastgele memeler atar.** \n **`*`öp - İstediğiniz bir kişiyi öpersiniz.** \n **`*`pixel - Avatarınızı pixelleştirir.** \n **`*`reddit (subreddit) - Belirttiğiniz subredditten entryler atar (NSFW içerikleri normal kanallara atamaz).** \n ',
              '**Kullanıcı ve Eğlence Sayfa 2**\n\n' + '**`*`resim - Google`den bir resim arayıp kanala atar.** \n **`*`rozet - Discord`da bulunan rozet bilgilerinizi gönderir.** \n **`*`yazı-tura - Yazı-Tura atar şansınızı denersiniz.** \n **`*`yumruk - İstediğiniz kişiyi yumruklayın.** \n  **`*`yaz - Bota istediğinizi yazdırırsınız.** \n  **`*`avatar - Avatarınızı gönderir.** \n  **`*`deepfry - Avatarınıza yanma efekti ekler.** \n  **`*`lice - Lice polisi peşinde. :police_officer: ** \n  **`*`captcha - Doğrulamayı nasıl geçeceksin?** \n  **`*`ph - PHub`da bir yorum attın galiba.** \n  **`*`clyde - Discord botu Clyde ile bir mesaj gönder.** \n  **`*`trumptweet - Trump sanırsam bir tweet gönderdi.** \n  **`*`cmm - Change my mind.** \n  **`*`cowsay - İnek ne dedi?** \n  **`*`leet - Leet tipiyle bir mesaj gönderin.** \n  **`*`kullanıcısay - Sunucuda bulunan kullanıcıları sayar.** \n  **`*`store - Play Store`den uygulama arayın.** \n   **`*`rastgele-şifre - Sizin için rastgele bir şifre oluşturur.** \n   **`*`zarat - Sizin için çok şanslı bir zar atar.** \n   **`*`pokemon <isim ya da id> - Belirtilen isimde ya da ID de bir pokemon arar ve bilgilerini çıkarır.** \n ',
              '**Kullanıcı ve Eğlence Sayfa 3**\n\n' + '**`*`renkara <ffffff> - Verilen bir renk kodunu çıkarır.** \n **`*`tersyaz - Verilen metni tersine çevirir.** \n **`*`sunucubilgi - Sunucu hakkında bilgi verir.** \n **`*`çeviri - Türkçe`den İngilizce`ye bir çeviri yapar. \n **`*`salty - Salty memeini avatarınıza uygular.** \n **`*`what - WHAT memeini avatarınıza uygular.** \n **`*`şaka - Avatarınıza şaka çerçevesini uygular.** \n **`*`floor - "The floor is" memeini avatarınızla beraber uygular.** \n **`*`bad - "bad thing" memeini avatarınıza uygular.** \n **`*`calling - Tom ve Jerry "arıyor" memeini avatarınıza uygular.** \n **`*`facts - Edd Eddn Eddy "facts" memeini avatarınıza uygular.** \n **`*`challenge - Minecraft challenge memeini oluşturursunuz. \n **`*`confused - Confused memeini atar.',
              '**Müzik**\n\n' + '``-``  *play = Youtube`da istediğiniz bir şarkıyı aratır ve oynatır. \n``-``  *pause = Oynatılan şarkıyı devam etmek üzere durdurur. \n``-``  *resume = Duraklatılan şarkıyı devam ettirir. \n``-``  *skip = Oynatılan şarkıyı geçer. \n``-``  *queue = Kuyruk’ta olan müzikleri gösterir. \n``-``  *np = Oynatılan müziği gösterir. \n``-``  *volume = Ses seviyesini ayarlarsınız. (0-100)',
              '**NSFW (Normal Kanallara Gönderemez!)**\n' + '\n``-``  *4k = NSFW rastgele bir resim gönderir. \n``-``  *boobs = Rastgele bir meme resmi gönderir. \n``-``  *ass = Rastgele bir kalça resmi gönderir. \n``-``  *hanal = Rastgele bir hentai anal resmi gönderir. \n``-``  *anal = Rastgele bir anal resmi gönderir. \n``-``  *pgif = Rastgele bir porn gifi gönderir. \n``-`` *hentai = Rastgele bir hentai gönderir. \n``-`` *hass = Rastgele bir hentai kalçası gönderir. \n``-`` *gw = Kadınların kendi nudelerini paylaştıkları r/gonewild`den görseller atar. \n``-`` *pussy = Rastgele bir vajina gönderir. \n``-`` *thigh = Rastgele bir tayt resmi gönderir. \n``-`` *pai - Paizuri hentaileri gönderir. \n``-`` *tentacle - Dokungaç hentaileri gönderir.',
              '**Moderasyon**\n' + '\n``-``  *sil - Belirtilen sayıda mesaj siler. \n ``-``  *ban - Kullanıcıyı yasaklar. \n ``-``  *mute - Kullanıcıyı susturur. \n ``-``  *slowmode. - Kullanılan kanalın yavaş-modunu ayarlar. (0-10)  \n ``-``  *nuke - Kullanılan kanalı tamamen silip bütün kanal ayarları dahil aynısını klonlayarak yeniden kurar. \n',
              '**Seviye/Level Sistemi**\n\n' + '**`*`profile - XP ve Levelinizi gösterir.** \n',
              '**Bot Bilgi**\n' + '\n``-``  *ping = Botun pingini gösterir. \n ``-``  *istatistik - Yazarak bot istatistiklerini görebilirsiniz. \n',
            ];
  let page = 1;
 
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://media.discordapp.net/attachments/772833533853040640/772833586478186516/ezgif.com-resize.jpg')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
 
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
 
    })
  })
};
 
 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};
 
exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
