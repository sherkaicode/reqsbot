module.exports = {
    name: 'kick', 
    description: 'Kick a member',
    execute(message, args){
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