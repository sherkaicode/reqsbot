module.exports = {
    name: 'react',
    description: 'Kick a member',
    async execute(client, message, args, Discord) {
        const channel = '814420531599638529';
        const pok = message.guild.roles.cache.find(role => role.name === 'Pokemon')
        const jap = message.guild.roles.cache.find(role => role.name === 'Japanese')
        const sk = message.guild.roles.cache.find(role => role.name === 'Soul Knight')

        const j = '🍥'
        const p = '🎮'
        const s = '🐑'

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a Role you want')
            .setDescription(`Choosing a role will let you access the channel\n\n`
                + `${j} for Japanese\n`
                + `${p} for Pokemon\n`
                + `${s} for Soul Knight`);

        //let messageEmbed = await message.guild.channels.cache.get('814420531599638529').send(embed)
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(j);
        messageEmbed.react(p);
        messageEmbed.react(s);

        client.on('messageReactionAdd', async (reaction, user) => {

            if (reaction.message.partial) await reaction.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === j) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(jap)
                }
                if (reaction.emoji.name === p) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pok)
                }
                if (reaction.emoji.name === s) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sk)
                }
            } else {
                return;
            }
        })

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === j) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(jap)
                }
                if (reaction.emoji.name === p) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pok)
                }
                if (reaction.emoji.name === s) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sk)
                }
            } else {
                return;
            }
        })
    }
}
