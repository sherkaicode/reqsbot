module.exports = (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    console.log("re")
    const channel = guild.channels.cache.get('817272342307930142');

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
    channel.messages.fetch({ limit: 2 }).then(messages => {
        let arr = messages.array()
        var text = arr[0].toString()
        //var match = /\r|\n/.exec(text);
        let isnum = /^\d+$/.test(text);

        var num = parseInt(arr[0].content)
        var pnum = parseInt(arr[1].content)
        var pauthor = messages.first().author
        var author = messages.last().author
        var a = num <= pnum || num > (pnum + 1)
        var b = pauthor == author
        var violation;

        if (a || b || isNaN(num) || !isnum) {
            violation = true
            channel.messages.fetch({ limit: 1 }).then(messages => {
                channel.bulkDelete(messages);

            })
            console.log('vio')
        }
        
        if (!violation) {
            if (getRandomInt(5)) {
                New = num + 1;
                channel.send(New)
            }
        }

    }).catch(err => {
        console.error(err)
    })

}