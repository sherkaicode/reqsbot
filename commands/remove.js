const fs = require('fs')
module.exports = {
    name: 'remove',
    description: "DO NOT USE ATM[Crash Bot]",
    execute(client, message, args, Discord) {
        if (false) {
            var removeUser = args[0];
            var data = fs.readFileSync('./Database/reqs.json');
            var json = JSON.parse(data);
            delete json[args[0]]
            fs.writeFileSync('./Database/reqs.json', JSON.stringify(json, null, 2));
            message.reply(args[0] + ' has been deleted');
        }
        else {
            message.channel.send('Cannot use at the moments');
        }
    }
}