module.exports = (Discord, client, member) => {
    let wcRole = member.guild.roles.cache.find(role => role.name === 'Member');

    member.roles.add(wcRole);
    let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setDescription(`**Welcome** <@${member.user.id}>`)
        .addFields(
            { name: 'Get Roles Here', value: '<#814420531599638529>' }
        )
        .setImage('https://media.tenor.com/images/5b6e236260445894227e4bba729048e0/tenor.gif')


    member.guild.channels.cache.get('813679705638305813').send(embed)
    //client.commands.get('react').execute(member, Discord, client);

}