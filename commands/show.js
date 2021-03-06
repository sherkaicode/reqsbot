const fs = require('fs')
module.exports = {
    name: 'show',
    description: "this is a ping command!",
    execute(client, message, args, Discord) {

        
        fs.readFile('./Database/reqs.json', (err, data) => {
            if (err) { throw err; }
            const _msgs = JSON.stringify(JSON.parse(data), null, 2);
            message.channel.send('```json\n' + _msgs + '\n```');
            console.log(_msgs)
          });

    }
}