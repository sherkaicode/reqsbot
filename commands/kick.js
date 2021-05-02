module.exports = {
    name: 'kick',
    description: 'Kicks a member[Admins Only]',
    execute(client, message, args, Discord) {
        if (message.member.roles.cache.some(role => role.name === 'Consultant') || message.member.roles.cache.some(role => role.name === 'Creator')) {
            const member = message.mentions.users.first()
            if (member) {
                const memTarget = message.guild.members.cache.get(member.id);
                memTarget.kick();
                message.channel.send("User has been kicked")

            }
            else {
                message.channel.send("You could'nt kick this member")
            }
        }
        else {
            message.channel.send('You dont have the power to do this')
        }
    }
}