const Discord = require('discord.js')
const Pokedex = require('pokedex-api')
const pokedex = new Pokedex()
 
exports.run = async (client, message, args) => {
        if (!args[0]) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen geçerli bir Pokémon ismi veya Pokémon ID numarası yazın.`)
                        .setTimestamp()
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }
       
        try {
                const pokeponum = args.join(" ")
                const pokemon = await pokedex.getPokemonByName(encodeURIComponent(pokeponum));
                const pokepon = pokemon[0]
                const embed = new Discord.MessageEmbed()
                        .setAuthor(`${pokepon.name} | Pokémon Bilgileri`, `https://i.imgur.com/5NO19vd.png`)
                        .addField(`Pokédex Numarası`, pokepon.number)
                        .addField(`Tür`, pokepon.species)
                        .addField(`Tip`, pokepon.types.join(', '))
                        .addField(`Normal Yetenekler`, pokepon.abilities.normal.join(', ') || 'Bulunmuyor/Bilinmiyor')
                        .addField(`Gizli Yetenekler`, pokepon.abilities.hidden.join(', ') || 'Bulunmuyor/Bilinmiyor')
                        .addField(`Yumurta Grubu`, pokepon.eggGroups.join(', '))
                        .addField(`Cinsiyet`, pokepon.gender.length ? `Erkek: ${pokepon.gender[0]}% | Kadın: ${pokepon.gender[1]}%` : 'Bilinmiyor')
                        .addField(`Boy`, pokepon.height)
                        .addField(`Ağırlık`, pokepon.weight)
                        .setThumbnail(pokepon.sprite)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
        } catch (err) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen geçerli bir Pokémon ismi veya Pokémon ID numarası yazın.`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
        }
}
 
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['pokedex'],
        permLevel: 0
}
 
exports.help = {
        name: 'pokemon',
        description: 'Belirtilen Pokémon hakkında bilgi verir.',
        usage: 'pokemon [pokemon ismi/pokemon id numarası]'
}