module.exports = {
    name: 'kick', 
    description: 'Kicks a member[Admins Only]',
    execute(client, message, args, Discord){
        const member = message.mentions.users.first()
        if (member){
            const memTarget = message.guild.members.cache.get(member.id);
            memTarget.kick();
            message.channel.send("User has been kicked")

        } 
        else{
            message.channel.send("You could'nt kick this member")
        }
    }
}