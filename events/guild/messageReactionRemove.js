module.exports = async (Discord, client, reaction, user) => {
    const channelID = '814420531599638529'
    if (reaction.message.channel == channelID) {
        const guild = client.guilds.cache.get('790447283921616916');

        const game = guild.roles.cache.find(role => role.name === 'Gamer')
        const jap = guild.roles.cache.find(role => role.name === 'Japanese')
        const sch = guild.roles.cache.find(role => role.name === 'Student')
        const ani = guild.roles.cache.find(role => role.name === 'Weeb')

        const j = '🗾'
        const g = '🎮'
        const s = '📝'
        const a = '🍥'

        if (reaction.emoji.name === j) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(jap)
        }
        if (reaction.emoji.name === g) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(game)
        }
        if (reaction.emoji.name === s) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(sch)
        }
        if (reaction.emoji.name === a) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(ani)
        }
        else {
            return;
        }
    }

}