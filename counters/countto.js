module.exports = (client) => {
    function getRandomInt(max) {
        var g = Math.floor(Math.random() * Math.floor(max))
        console.log(g)
        if (g == 0) {
            return true;
        }
        else {
            return false;
        }

    }
    const guild = client.guilds.cache.get('790447283921616916');
    console.log("re")
    const channel = guild.channels.cache.get('817272342307930142');

    channel.messages.fetch({ limit: 1 }).then(messages => {
        var num = messages.first().content
        if (getRandomInt(3)) {
            New = parseInt(num) + 1;
            console.log(New)
            channel.send(New)
        }

    }).catch(err => {
        console.error(err)
    })

}