module.exports = {
    name: 'ban', 
    description: 'Bans a Member [Admins Only]',
    execute(client, message, args, Discord){
        const member = message.mentions.users.first()
        if (member){
            const memTarget = message.guild.members.cache.get(member.id);
            memTarget.ban();
            message.channel.send("User has been banned")

        } 
        else{
            message.channel.send("You could'nt ban this member")
        }
    }
}