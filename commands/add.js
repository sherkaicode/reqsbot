const fs = require('fs')
module.exports = {
    name: 'add',
    description: "DO NOT USE THIS ATM[Crash the Bot]",
    execute(client, message, args, Discord) {
        if (false) {
            message.reply('Input Description').then(() => {
                message.channel.awaitMessages(m => m.author.id == message.author.id,
                    { max: 1, time: 30000 }).then(collected => {
                        mes = collected.first().content
                        if (collected.first().content.toLowerCase()) {


                            message.reply('Input Date MM/DD/YY').then(() => {
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    { max: 1, time: 30000 }).then(collected => {
                                        date = collected.first().content
                                        if (collected.first().content.toLowerCase()) {

                                            client.reqs[args[0]] = {
                                                description: mes,
                                                date: date
                                            }
                                            fs.writeFile("./Database/reqs.json", JSON.stringify(client.reqs, null, 4), err => {
                                                if (err) throw err;
                                            })
                                            message.reply('Logged');
                                        }

                                        else
                                            message.reply('Operation canceled.');
                                    }).catch(() => {
                                        //
                                    });
                            })
                        }

                        else
                            message.reply('Operation canceled.');
                    }).catch(() => {
                        //
                    });
            })

        }
        else {
            message.channel.send('Cannot use at the moments');
        }
    }
}