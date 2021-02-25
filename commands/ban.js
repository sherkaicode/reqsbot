module.exports = {
    name: 'ban', 
    description: 'bans a member',
    execute(message, args){
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