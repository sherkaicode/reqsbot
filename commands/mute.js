const ms = require('ms')
module.exports = {
    name: 'mute',
    description: 'Mutes a member[Admins Only]',
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            let main = message.guild.roles.cache.find(role => role.name === 'Member')
            let mute = message.guild.roles.cache.find(role => role.name === 'Muted')
            let memTarget = message.guild.members.cache.get(target.id)

            if (!args[1]) {
                memTarget.roles.remove(main.id);
                memTarget.roles.add(mute.id);
                message.channel.send(`<@${memTarget.user.id}> has been muted`);
                return;
            }
            memTarget.roles.remove(main.id);
            memTarget.roles.add(mute.id);
            message.channel.send(`<@${memTarget.user.id}> has been muted  for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memTarget.roles.remove(mute.id);
                memTarget.roles.add(main.id);
                message.channel.send(`<@${memTarget.user.id}> has been unmuted`);

            },ms(args[1]));
        }
        else {
            message.channel.send("User does not exist");
        }
    }
}