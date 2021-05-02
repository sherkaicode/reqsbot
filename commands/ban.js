module.exports = {
    name: 'ban',
    description: 'Bans a Member [Admins Only]',
    execute(client, message, args, Discord) {

        if (message.member.roles.cache.some(role => role.name === 'Consultant') || message.member.roles.cache.some(role => role.name === 'Creator')) {
            const member = message.mentions.users.first()
            if (member) {
                const memTarget = message.guild.members.cache.get(member.id);
                memTarget.ban();
                message.channel.send("User has been banned")

            }
            else {
                message.channel.send("You could'nt ban this member")
            }
        }
        else {
            message.channel.send("You don't have power to do this")
        }
    }
}