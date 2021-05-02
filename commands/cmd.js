const { count } = require('console')
const fs = require('fs')
module.exports = {
    name: 'cmd',
    description: "send command list",
    execute(client, message, args, Discord){
        const commandFiles = fs.readdirSync('./commands/')

        m = '';
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            m = m + `__${command.name}__` + '\n' + `> ${command.description}` + '\n';  
        }
       
        message.author.send(m)
    }
}