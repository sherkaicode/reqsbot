const { count } = require('console')
const fs = require('fs')
module.exports = {
    name: 'cmd',
    description: "send cmd",
    execute(client, message, args, Discord){
        const commandFiles = fs.readdirSync('./commands/')
        var asd = new Array()
        c = 0
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            //client.commands.set(command.name, command);
        
            asd[c] = command.name;
            c = c+1;       
        }
        coun = 0
        var m = '';
        while (coun < asd.length){
            m = m + asd[coun] + '\n'
            coun = coun + 1;
            
        }
        message.channel.send('```'+m+'```')
    }
}