const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, Kegri } = require("./config.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
const MusicBot = require('discord-music-system');
const DiscordLevels = require('discord-levels');
var Jimp = require('jimp');
require('./util/eventHandler.js')(client);

/////TABLES
var commandtable = new AsciiTable('Phylake Command Table');
////


var DanBotHosting = require("danbot-hosting");
const manager = new Discord.ShardingManager("./index.js", { token: "./config.json" });
const API = new DanBotHosting.ShardingClient("danbot-dk5vhk", manager);

const bot = new MusicBot({
    botPrefix: '*', // Example: !
    ytApiKey: 'AIzaSyAp-e-djGcuPGRId3aFiRQSY29MDh4m0ts', // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
    botClient: client // Your Discord client. Here we're using discord.js so it's the Discord.Client()
});

client.on('message', message => { // When the bot receive a message
    if(message.content.startsWith(bot.prefix)) { // If the message starts with your prefix
        bot.onMessage(message); // The music-system must read the message, to check if it is a music command and execute it.
    };
});

//BOTUN MESAJLARINI KANALA ATTIRIYORUM
client.on("message", msg => {
var dm = client.channels.cache.get("778518946612903987")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Mesajları.`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});

//LEVEL SİSTEM
client.on('message', message => {
  if (message.content.startsWith(config.prefix + 'addXp')) {
      let User = message.mentions.members.first() || message.author;
      let Xp = message.content.split(' ').slice(2).join(' ');
      if (!Xp) {
          //Error: no Xp
      } else {
          DiscordLevels.addXp(User.id, Xp)
      };
  };
  if (message.content.startsWith(config.prefix + 'setXp')) {
      let User = message.mentions.members.first() || message.author;
      let Xp = message.content.split(' ').slice(2).join(' ');
      if (!Xp) {
          //Error: no Xp
      } else {
          DiscordLevels.setXp(User.id, Xp)
      };
  };
  if (message.content.startsWith(config.prefix + 'delXp')) {
      let User = message.mentions.members.first() || message.author;
      let Xp = message.content.split(' ').slice(2).join(' ');
      if (!Xp) {
          //Error: no Xp
      } else {
          DiscordLevels.removeXp(User.id, Xp)
      };
  };
  if (message.content.startsWith(config.prefix + 'addLevel')) {
      let User = message.mentions.members.first() || message.author;
      let Level = message.content.split(' ').slice(2).join(' ');
      if (!Level) {
          //Error: no Level
      } else {
          DiscordLevels.addLevel(User.id, Level)
      };
  };
  if (message.content.startsWith(config.prefix + 'setLevel')) {
      let User = message.mentions.members.first() || message.author;
      let Level = message.content.split(' ').slice(2).join(' ');
      if (!Level) {
          //Error: no Level
      } else {
          DiscordLevels.setLevel(User.id, Level)
      };
  };
  if (message.content.startsWith(config.prefix + 'delLevel')) {
      let User = message.mentions.members.first() || message.author;
      let Level = message.content.split(' ').slice(2).join(' ');
      if (!Level) {
          //Error: no Level
      } else {
          DiscordLevels.removeLevel(User.id, Level)
      };
  };
  if (message.content.startsWith(config.prefix + 'profile')) {
      let User = message.mentions.members.first() || message.author;
      let Profile = DiscordLevels.getProfile(User.id);
      message.channel.send(`Level: ${Profile.Level} | Xp: ${Profile.Xp}`)
  };
  if (message.content.startsWith(config.prefix + 'leaderboard')) {
      message.channel.send(`\`\`\`${DiscordLevels.createLeaderboard(client).content}\`\`\``);
  };
})


var DanBotHosting = require("danbot-hosting");
 
client.on("ready", async () => {
  const API = new DanBotHosting.Client("danbot-dk5vhk", client);
 
  // Start posting
  let initalPost = await API.autopost();
 
  if (initalPost) {
    console.error(initalPost); // console the error
  }
});

const webhook = new Discord.WebhookClient(
  "777293175390732339",
  "Mkaa3A9OlgpS_y0x6DtCK3CbJGUpxaL6Aip3keqZ5EJ_vRc5ksR5I3cTGJ6unETHsztk"
);

client.on("guildCreate", async guild => {
  const embed = new Discord.MessageEmbed()
   
    .setTimestamp()
    .setColor("GREEN")
    .setTitle(`Yükselmeye Devam!`)
    .setFooter(`${client.guilds.size} sunucuya ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya Hizmet!`
    )
    .addField(
      "Sunucu Bilgileri",
      `Sunucu İsmi: **${guild.name}**\nSunucu ID: **${guild.id}**\nSunucu Sahibi: **${guild.owner}**\n**Sunucudaki Uye Sayısı: **${guild.memberCount}**`
    );
  webhook.send(embed);
});
client.on("guildDelete", async guild => {
  const embed = new Discord.MessageEmbed()
   
    .setTimestamp()
    .setColor("RED")
    .setTitle(`Düşüşteyiz...`)
    .setFooter(`${client.guilds.size} sunucuya ve ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya Hizmet!`
    )
    .addField(
      "Sunucu Bilgileri",
      `Sunucu İsmi: **${guild.name}**\nSunucu ID: **${guild.id}**\nSunucu Sahibi: **${guild.owner}**\n**Sunucudaki Uye Sayısı: **${guild.memberCount}**`
    );
  webhook.send(embed);
});

client.on("message", async msg => { 
  const as = require('./config.json') 
  const dcskelime = [client.user.id, client.user.username, "<@"+client.user.id+">"]; 
  if (dcskelime.some(dcss => msg.content.includes(dcss))) {
  msg.reply("Prefixim: "+as.prefix) 
  }}) 

client.on('guildMemberAdd', async member => {
require("moment-duration-format");
    moment.locale('tr')
    let user = client.users.get(member.id);
    let tarih = moment(member.user.createdAt.getTime()).format('LLL')
    let gün = moment.duration(new Date().getTime() - member.user.createdAt.getTime()).format("D")
    let resim = new Discord.Attachment('https://cdn.discordapp.com/attachments/713874856143355935/714443923338297364/giphy.gif')
    let kişi = member.guild.memberCount
    let kayıtcırol = "771761419833835534" //Yetkili rolünüz ID'sini girin.
    let kanal = client.channels.get("771761420265586743") //Kanalınızın ID'sini girin.
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün1 = moment.duration(kurulus).format("D")   
    var devtr;
    if (kurulus < 15) devtr = 'Güvenilir Değil!'
    if (kurulus > 15) devtr = 'Güvenilir!'

    kanal.send(`Merhaba, <@${member.user.id}> **hoşgeldin!**\n\nSeninle beraber **${kişi}** kişiyiz.\n\n\nHesap kuruluş tarihi; **${tarih}** [**${gün}** gün önce]\n\n Sorular ve sorunlar için: ${kayıtcırol} Kegri | cagrithesinner. \n \n Hesabı ${devtr} `, resim)
})


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


commandtable.setHeading("Command", 'Status', "Aliases")
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  commandtable.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  commandtable.addRow(komutcuklar.help.name, "❌")
  continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
console.log(commandtable.toString())

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === Kegri) permlvl = 10;
  return permlvl;
};

client.login(config.token);