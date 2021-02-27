module.exports = async (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    const channel = guild.channels.cache.get('815081738459545601');
    setInterval(() => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        
        channel.setName(`Server Time:${hours}:${minutes}`)
        console.log(hours)
        console.log(minutes)
    }, 5000);
}