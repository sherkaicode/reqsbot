module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('815080759714119700')

        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        //console.log(memberCount);
    }, 5000);
}