module.exports = {
    name: 'unmute',
    description: 'Unmutes a member [Admins Only]',
    execute(client, message, args, Discord) {
        if (message.member.roles.cache.some(role => role.name === 'Consultant') || message.member.roles.cache.some(role => role.name === 'Creator')) {
            const target = message.mentions.users.first();
            if (target) {
                let main = message.guild.roles.cache.find(role => role.name === 'Member')
                let mute = message.guild.roles.cache.find(role => role.name === 'Muted')
                let memTarget = message.guild.members.cache.get(target.id)

                memTarget.roles.remove(mute.id);
                memTarget.roles.add(main.id);


                message.channel.send(`<@${memTarget.user.id}> has been unmuted`);

            }
            else {
                message.channel.send("User does not exist");
            }
        }
        else {
            message.channel.send('You dont have power to do this')
        }
    }
}