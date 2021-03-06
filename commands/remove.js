const fs = require('fs')
module.exports = {
    name: 'remove',
    description: "this is a ping command!",
    execute(client, message, args, Discord) {

        var removeUser = args[0];
        var data = fs.readFileSync('./Database/reqs.json');
        var json = JSON.parse(data);
        delete json[args[0]]
        fs.writeFileSync('./Database/reqs.json', JSON.stringify(json, null, 2));
        message.reply(args[0]+' has been deleted');

    }
}