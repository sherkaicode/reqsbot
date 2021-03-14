module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('818403289091670027')

        channel.setName(`👥│ ${memberCount.toLocaleString()} Members`)
        //console.log(memberCount);
    }, 5000);
}