module.exports = (client, Discord) => {

    const guild = client.guilds.cache.get('790447283921616916');
    const channel = guild.channels.cache.get('815080759714119700')

    let embed = new Discord.MessageEmbed()
        .setColor()
        .setColor('#e42643')
        .setDescription(`**Welcome** <@${member.user.id}>`)
        .addFields(
            { name: 'Get Roles Here', value: '<#814420531599638529>' }
        )
        .setImage('https://media.tenor.com/images/5b6e236260445894227e4bba729048e0/tenor.gif')

    channel.send(embed);

}