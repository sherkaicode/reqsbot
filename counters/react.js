module.exports = async (client, Discord) => {
    const channel = '814420531599638529';
    const guild = client.guilds.cache.get('790447283921616916');

    const game = guild.roles.cache.find(role => role.name === 'Gaming')
    const jap = guild.roles.cache.find(role => role.name === 'Japanese')
    const sch = guild.roles.cache.find(role => role.name === 'School')
    

    const j = '🍥'
    const g = '🎮'
    const s = '📝'


    let embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Choose a Role you want')
        .setDescription(`Choosing a role will let you access the channel\n\n`
            + `${j} for Japanese\n`
            + `${g} for Gaming\n`
            + `${s} for School`);

    guild.channels.cache.get('814420531599638529').messages.fetch({ limit: 1 }).then(messages => {
        guild.channels.cache.get('814420531599638529').bulkDelete(messages);
    })
    let messageEmbed = await guild.channels.cache.get('814420531599638529').send(embed)
    messageEmbed.react(j);
    messageEmbed.react(g);
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
            if (reaction.emoji.name === g) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(game)
            }
            if (reaction.emoji.name === s) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(sch)
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
            if (reaction.emoji.name === g) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(game)
            }
            if (reaction.emoji.name === s) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(sch)
            }
        } else {
            return;
        }
    })
}