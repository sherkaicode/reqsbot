const fs = require('fs')
module.exports = {
    name: 'show',
    description: "DO NOT USE ATM[Crash Bot]",
    execute(client, message, args, Discord) {
        if (false) {

            fs.readFile('./Database/reqs.json', (err, data) => {
                if (err) { throw err; }
                const _msgs = JSON.stringify(JSON.parse(data), null, 2);
                message.channel.send('```json\n' + _msgs + '\n```');
                console.log(_msgs)
            });

        }
        else {
            message.channel.send('Cannot use at the moments');
        }
    }
}