module.exports = (client) => {
    const guild = client.guilds.cache.get('790447283921616916');
    console.log("re")
    const channel = guild.channels.cache.get('824294522757447700');

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

        console.log(isnum)
        //console.log(parseInt(match.index))
        //console.log(text)
        //console.log(parseInt(arr[1].content))
        //console.log(arr[0])
        var num = parseInt(arr[0].content)
        var pnum = parseInt(arr[1].content)
        var pauthor = messages.first().author
        var author = messages.last().author
        var a = num <= pnum || num > (pnum + 1)
        var b = pauthor == author
        var violation;
        //console.log(num)
        //console.log(`Received ${messages.size} messages`);

        if (a || b || isNaN(num) || !isnum) {
            violation = true
            channel.messages.fetch({ limit: 1 }).then(messages => {
                channel.bulkDelete(messages);

            })
            console.log('vio')
        }
        
        // try {
        //     if (!isNaN(match.index)) {
        //         violation = true
        //         channel.messages.fetch({ limit: 1 }).then(messages => {
        //             channel.bulkDelete(messages);

        //         })
        //         console.log('vio')
        //     }
        // }
        // catch (err) {
        // }

        if (!violation) {
            if (getRandomInt(3)) {
                New = num + 1;
                channel.send(New)
            }
        }

    }).catch(err => {
        console.error(err)
    })

}